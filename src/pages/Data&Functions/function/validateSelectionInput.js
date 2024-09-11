export default function validateSelectionInput (valueState) {
    if (valueState) {
        return true;
      } else {
        return "This field is required";
      }
}