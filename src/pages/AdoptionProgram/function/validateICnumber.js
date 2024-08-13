export default function validateICnumber (valueIC) {
    // Check if the value is exactly 12 digits
    if (valueIC) {
      if (!/^\d{12}$/.test(valueIC)) {
        return "IC Number must be exactly 12 digits";
      } else {
        this.progressionBarMale += 10;
        return true;
      }
    } else {
      return "This field is required";
    }
  }