<template>
  <div class="col-span-6 flex justify-center items-center">
    <!-- Confirm button will be disabled based on the progression status -->
    <Button
      type="submit"
      value="Submit"
      class="bg-green-400 w-full h-auto rounded-md cursor-pointer hover:text-white"
      @click="handleConfirmSubmission"
      :disabled="submitButtonStatus"
    >
      Confirm
    </Button>
  </div>
  

</template>

<script setup>
import { supabase } from "@/clients/supabaseClient";
import { ref, computed} from "vue";

// Props are reactive, and `totalProgressionValue` is passed from the parent
const props = defineProps({
  totalProgressionValue: {
    type: Number,
    required: true,
  },
  dataBeforeSubmit: {
    type: Array,
    required: true,
  }
});



// Compute the status of the submit button dynamically based on the total progression value
const submitButtonStatus = computed(() => {
  console.log("submitButtonStatus computed: ", props.totalProgressionValue < 300);
  // The button will be disabled if total progression is less than 300
  return props.totalProgressionValue < 300;
});
const proceedToApplication = ref(true)
// Handle submission data logic
const handleConfirmSubmission = async () => {
  proceedToApplication.value = false;
  console.log("Complete data submitted to the supabase: " + props.dataBeforeSubmit);

  //Get the user Id first 
  const userId = ref("");
  const programId = ref(0);
  try{
    const { data:{user}, error: getIdError} = await supabase.auth.getUser();
    if (getIdError) {
      throw getIdError;
    }else{
      userId.value = user.id
    }
  }catch(error){
    alert(error.message)
  }

  // Upload the data into the table named adoption_program
  try{
    const {data, error: insertProgramError} = await supabase
    .from("adoption_program")
    .insert([
      {
        program_status: true,
        marriage_evidence: props.dataBeforeSubmit[2].file_marriage,
        user_id: userId.value
      }
    ])
      .select()

    if(insertProgramError){
      throw insertProgramError
    }
      
   // Get the id of the program
  if (data && data.length > 0) {
    programId.value = data[0]?.program_id; // Get the ID of the inserted row
    console.log("Inserted Program Data: ", data);
    console.log("Inserted Program ID: ", programId);
  }else{
    alert("Program ID is null. Cannot proceed with inserting adopters.");
    return; // Exit if the program ID is null
  }

  }
  catch(error){
    alert(error.message)
  }


  
  // Upload the data into the table named adoption_program_adopter
  try{
    const {error: insertAdopterError} = await supabase
    .from("adoption_program_adopter")
    .insert([
      {
        gender: "Male",
        name: props.dataBeforeSubmit[0].name,
        state: props.dataBeforeSubmit[0].state,
        identication_card: props.dataBeforeSubmit[0].identication_card,
        email: props.dataBeforeSubmit[0].email,
        contact_number: props.dataBeforeSubmit[0].phone_number,
        career_status: props.dataBeforeSubmit[0].career_status,
        career_status_others: props.dataBeforeSubmit[0].career_status_others ? props.dataBeforeSubmit[0].career_status_others: null,
        industry_select: props.dataBeforeSubmit[0].industry_select,
        medical_check_physically: props.dataBeforeSubmit[0].medical_check_physically,
        medical_check_mentally: props.dataBeforeSubmit[0].medical_check_mentally,
        salary_slip: props.dataBeforeSubmit[0].salary_slip,
        program_id: programId.value
      },
      {
        gender: "Female",
        name: props.dataBeforeSubmit[1].name,
        state: props.dataBeforeSubmit[1].state,
        identication_card: props.dataBeforeSubmit[1].identication_card,
        email: props.dataBeforeSubmit[1].email,
        contact_number: props.dataBeforeSubmit[1].phone_number,
        career_status: props.dataBeforeSubmit[1].career_status,
        career_status_others: props.dataBeforeSubmit[1].career_status_others ? props.dataBeforeSubmit[1].career_status_others: null,
        industry_select: props.dataBeforeSubmit[1].industry_select,
        medical_check_physically: props.dataBeforeSubmit[1].medical_check_physically,
        medical_check_mentally: props.dataBeforeSubmit[1].medical_check_mentally,
        salary_slip: props.dataBeforeSubmit[1].salary_slip,
        program_id: programId.value
      }
    ])

    if(insertAdopterError){
      throw insertAdopterError
    }
      
   

  }
  catch(error){
    alert(error.message)
  }
};
</script>
