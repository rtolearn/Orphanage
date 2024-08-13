export default function validatePhoneNumber (valuePhone) {
    if (valuePhone) {
      if (!/^[+]?[0-9]{10,15}$/.test(valuePhone.trim())) {
        return "Invalid phone number. Exp: +60 123 4567 89101";
      } else {
        return true;
      }
    } else {
      return "This field is required";
    }
  }