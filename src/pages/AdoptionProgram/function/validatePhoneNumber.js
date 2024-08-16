export default function validatePhoneNumber (valuePhone) {
    if (valuePhone) {
      if (!/^[+]?[0-9]{10,15}$/.test(valuePhone.trim())) {
        return "Invalid phone number.";
      } else {
        return true;
      }
    } else {
      return "This field is required";
    }
  }