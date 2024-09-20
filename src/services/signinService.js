import { supabase } from "@/clients/supabaseClient";
import { useMessageStore } from "@/store/messageStore";
import { ref } from "vue";

const messageStore = useMessageStore();
const message = ref(messageStore.statusLogIn);
const userId = ref(messageStore.userId)

const updateMessage = () => {
  console.log("userId: " + userId.value)
  messageStore.setStatus(!message.value);
};

// Function to handle sign in
const handleSignIn = async (signInIndividual, router) => {

  console.log("signInIndividual.value:", signInIndividual.value); // Check if email and password are present
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: signInIndividual.value.email,
      password: signInIndividual.value.password,
    });

    if (error) {
      // Throw the error so that the error will be caught by the catch block
      throw error;
    }

    if (data) {
      alert("Login successful");
 
      if (data.user) {
        messageStore.setUserId(data.user.id); // Save the user ID in the store
        if(error){
          console.log(error.message)
        }
      } else {
        console.error("User object not found in the response:", data);
      }

      // Call the function to update the global user login status
      updateMessage();
      // Redirect to home or another route
      router.push({ path: "./" });
    }
  } catch (error) {
    alert(error.message);
  }
};

export { handleSignIn };
