
import { supabase } from "@/clients/supabaseClient";
import { useMessageStore } from "@/store/messageStore";
const userId = useMessageStore().userId;
//Function for the equipment and necessary
const displayItem = async(objItem, typeOfItem) =>{
    try {
      const { data, error } = await supabase
        .from("sponsor_items")
        .select("*")
        .eq("type", typeOfItem);
  
      if (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
      console.log("Data retrieved from the equipment table:", data);
  
      // Check if data is empty
      if (data && data.length === 0) {
        alert("No equipment found.");
      } else {
        // Process the data as needed
        data.forEach((item) => {
            objItem.value.push({
            id: item.sponsor_item_id,
            item_image: item.item_image,
            item_name: item.item_name,
            current_amount: item.current_amount,
            max_amount: item.max_amount,
          });
        });
  
        // Sort the data based on the gap (max_amount - current_amount) in descending order
        objItem.value.sort((a, b) => {
          const gapA = a.max_amount - a.current_amount;
          const gapB = b.max_amount - b.current_amount;
          return gapB - gapA; // Sort in descending order
        });
      }
    } catch (error) {
      alert(error.message);
    }
  }

  //Function for the Scholarship (Gratitude)

  const handleDataSubmission = async (dataObj, router) => {
    console.log("Data before submiting to the supabase" + dataObj);
  
    try {
     
      const {error: insertError } = await supabase
        .from("donation_scholarship")
        .insert([
          {
            requirement: dataObj.requirement,
            donor_name: dataObj.patron.name,
            donor_email: dataObj.patron.email,
            amount: dataObj.patron.fund,
            meeting_date: dataObj.patron.date,
            user_id: userId,
          },
        ]);
      if (insertError) {
        throw insertError;
      }
    } catch (error) {
      console.log(error.message);
    }
  
    alert(
      `All the information are stored,
      please wait for the updates via your email for futher discussion`
    );
  
    router.push("/sponsor&donation");
  };
  export {displayItem, handleDataSubmission}