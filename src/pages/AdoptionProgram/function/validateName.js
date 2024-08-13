export default function validateName (valueName) {
    if (valueName && valueName.trim()) {
      if (/[^a-zA-Z]/.test(valueName)) {
        return "Name can only contain alphabetic characters";
      } else {
        
        return true;
      }
    } else {
  
      return "This field is required";
    }
  }