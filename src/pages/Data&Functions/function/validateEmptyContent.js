export default function validateContent (value) {
    if(value == null || value == 0){
        return "This field is required."
    }
    else return true;
}