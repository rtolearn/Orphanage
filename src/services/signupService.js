import { supabase } from "@/clients/supabaseClient";
import { useMessageStore } from "@/store/messageStore";
const messageStore = useMessageStore();
const handleSignUp = async (signUpIndividual, router) => {
  try {
    // Check if the email already exists
    const { data: existingUsers, error: emailCheckError } = await supabase
      .from("users")
      .select("email")
      .eq("email", signUpIndividual.value.email);

    if (emailCheckError) {
      throw emailCheckError; // Handle email check error
    }

    if (existingUsers.length > 0) {
      alert("This email is already registered. Please use a different email.");
      return; // Exit if email already exists
    }

    // Proceed to sign up the user
    const {
      data: { user },
      error: signUpError,
    } = await supabase.auth.signUp({
      email: signUpIndividual.value.email,
      password: signUpIndividual.value.password,
    });

    if (signUpError) {
      throw signUpError; // Handle sign-up error
    }else{
        messageStore.setUserId(user.id)
    }

    // Use the user ID from the sign-up response
    if (user) {
      // Proceed with inserting user data into your database
      const { error: insertError } = await supabase.from("users").insert([
        {
          user_id: user.id, // Include the user ID here
          first_name: signUpIndividual.value.first_name,
          last_name: signUpIndividual.value.last_name,
          age: signUpIndividual.value.age,
          gender: signUpIndividual.value.gender,
          state: signUpIndividual.value.state,
          email: signUpIndividual.value.email,
          contact_number: signUpIndividual.value.phone_number,
          address: signUpIndividual.value.address,
        },
      ]);

      if (insertError) {
        alert("Information cannot be stored");
      } else if (
        signUpIndividual.value.password !==
        signUpIndividual.value.password_confirmation
      ) {
        alert("The password and password confirmation are not matched");
      } else {
        alert("Sign Up successfully!");
      }
    }

    router.push({ path: "/sign-in" });
  } catch (error) {
    alert(error.message); // Handle any other errors
  }
};

export { handleSignUp };
