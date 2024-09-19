import { supabase } from "@/clients/supabaseClient";
import { useMessageStore } from "@/store/messageStore";
import { ref } from "vue";

const userId = useMessageStore().userId;

const errorMessage = ref(null);


// Function for file selection
const onFileSelect = async (event, emit, src) => { // Accept emit as an argument
  const file = event.files[0];
  if (!file) {
    errorMessage.value = "No file selected.";
    return;
  }
  errorMessage.value = null; // Reset previous error
  try {
    src.value = URL.createObjectURL(file); // Preview image
    const filePath = `UserProfilePicture/${userId}/${file.name}`; // Construct path

    const { error: uploadError } = await supabase.storage
      .from("UserProfilePicture")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: true,
      });

    if (uploadError) throw uploadError;

    const { data, error: urlError } = supabase.storage
      .from("UserProfilePicture")
      .getPublicUrl(filePath);

    if (urlError || !data.publicUrl) throw urlError;

    emit("imageURL", data.publicUrl); // Emit the event with the URL

  } catch (err) {
    errorMessage.value = `Error uploading image: ${err.message}`; // Update error message
  }
};

// Function to set default profile picture
const defaultEditProfilePicture = async (src) => {
  const { data } = await supabase
    .from("users")
    .select("image_url")
    .eq("user_id", userId)
    .single();

  if (data && data.image_url) {
    src.value = data.image_url; // Set the src to the user's image
  }
};

// Function for the input field
const displayValueInInputField = async(updatedValue) =>{
    try {
      //Retrieve the data
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("user_id", userId)
        .single();
  
      if (error) {
        alert(error.message);
      } else {
        updatedValue.first_name = data.first_name;
        updatedValue.last_name = data.last_name;
        updatedValue.contact_number = data.contact_number;
        updatedValue.state = data.state;
        updatedValue.address = data.address;
      }
    } catch (error) {
      alert(error.message);
    }
  }

//Function to update the data
// Function for handling the update of data
const updateData = async (validationSchema, updatedValue, imageURL, visible,emits) => {
    try {
      // Validate the updatedValue
      await validationSchema.validate(updatedValue, { abortEarly: false });
      console.log("imge Url pass into the button component: " + imageURL);
      // Update user's data
      if(imageURL){
        const { error } = await supabase
        .from("users")
        .update({
          first_name: updatedValue.first_name,
          last_name: updatedValue.last_name,
          contact_number: updatedValue.contact_number,
          state: updatedValue.state,
          address: updatedValue.address,
          image_url: imageURL, 
        })
        .eq("user_id", userId);
  
      if (error) {
        throw error;
      }
      }
      else{
        const { error } = await supabase
        .from("users")
        .update({
          first_name: updatedValue.first_name,
          last_name: updatedValue.last_name,
          contact_number: updatedValue.contact_number,
          state: updatedValue.state,
          address: updatedValue.address,
        })
        .eq("user_id", userId.value);
  
      if (error) {
        throw error;
      }
      }
      
      alert("Data updated");
  
      // Close the modal dialog
      visible.value = false;
      emits("visibility", visible.value);
    } catch (err) {
      // Handle validation errors
      if (err.errors) {
        alert(err.errors.join(", ")); // Show all validation errors
      } else {
        alert("Error updating data: " + err.message);
      }
    }
  };

export { onFileSelect, defaultEditProfilePicture, displayValueInInputField, updateData };
