export default function validateEmail (valueEmail)  {
    if (valueEmail) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valueEmail)) {
        return "Please enter a valid email address.";
      } else {
        return true;
      }
    } else {
      return "This field is required";
    }
}
  




