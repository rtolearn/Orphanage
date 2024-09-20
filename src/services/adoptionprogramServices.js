import { supabase } from "@/clients/supabaseClient";
import { useMessageStore } from "@/store/messageStore";
const userId = useMessageStore().userId;
// Function for the index.vue
const handleProgramStatus = async () => {
  const { data, error: programStatus } = await supabase
    .from("adoption_program")
    .select("program_status")
    .eq("user_id", userId)
    .single();

  if (programStatus) {
    console.error("Error getting program ID", programStatus);
    return;
  }

  if (data.program_status) {
    return true;
    // console.log("aplication status:" + applicationStatus.value);
  }
};

const handleApplicationProgression = async (events, phaseObj, currentPhase) => {
  const { data, error: applicationProgressionError } = await supabase
    .from("adoption_program")
    .select("application_progression")
    .eq("user_id", userId)
    .single();

  if (applicationProgressionError) {
    console.error("Error getting program ID", applicationProgressionError);
    return;
  }
  if (data) {
    console.log(
      "Current phase of application progression" + data.application_progression
    );
  }
  for (let i = 0; i < data.application_progression; i++) {
    events.value.push(phaseObj[i]);
  }

  currentPhase.value = events.value[data.application_progression - 1];
};

// Function for the  FormSubmitButton.vue
// Handle submission data logic
const handleConfirmSubmission = async (dataSubmit, programId) => {
  console.log("Complete data submitted to the supabase: " + dataSubmit);

  // Upload the data into the table named adoption_program
  try {
    const { data, error: insertProgramError } = await supabase
      .from("adoption_program")
      .insert([
        {
          program_status: true,
          marriage_evidence: dataSubmit[2].file_marriage,
          user_id: userId,
        },
      ])
      .select();

    if (insertProgramError) {
      throw insertProgramError;
    }

    // Get the id of the program
    if (data && data.length > 0) {
      programId.value = data[0]?.program_id; // Get the ID of the inserted row
      console.log("Inserted Program Data: ", data);
      console.log("Inserted Program ID: ", programId);
    } else {
      alert("Program ID is null. Cannot proceed with inserting adopters.");
      return; // Exit if the program ID is null
    }
  } catch (error) {
    alert(error.message);
  }

  // Upload the data into the table named adoption_program_adopter
  try {
    const { error: insertAdopterError } = await supabase
      .from("adoption_program_adopter")
      .insert([
        {
          gender: "Male",
          name: dataSubmit[0].name,
          state: dataSubmit[0].state,
          identication_card: dataSubmit[0].identication_card,
          email: dataSubmit[0].email,
          contact_number: dataSubmit[0].phone_number,
          career_status: dataSubmit[0].career_status,
          career_status_others: dataSubmit[0].career_status_others
            ? dataSubmit[0].career_status_others
            : null,
          industry_select: dataSubmit[0].industry_select,
          medical_check_physically: dataSubmit[0].medical_check_physically,
          medical_check_mentally: dataSubmit[0].medical_check_mentally,
          salary_slip: dataSubmit[0].salary_slip,
          program_id: programId.value,
        },
        {
          gender: "Female",
          name: dataSubmit[1].name,
          state: dataSubmit[1].state,
          identication_card: dataSubmit[1].identication_card,
          email: dataSubmit[1].email,
          contact_number: dataSubmit[1].phone_number,
          career_status: dataSubmit[1].career_status,
          career_status_others: dataSubmit[1].career_status_others
            ? dataSubmit[1].career_status_others
            : null,
          industry_select: dataSubmit[1].industry_select,
          medical_check_physically: dataSubmit[1].medical_check_physically,
          medical_check_mentally: dataSubmit[1].medical_check_mentally,
          salary_slip: dataSubmit[1].salary_slip,
          program_id: programId.value,
        },
      ]);

    if (insertAdopterError) {
      throw insertAdopterError;
    }
  } catch (error) {
    alert(error.message);
  }
};

export {
  handleProgramStatus,
  handleConfirmSubmission,
  handleApplicationProgression,
};
