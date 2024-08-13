export default function (valueFile) {
    if(valueFile){
        this.progressionBarMale += 10;
        return true;
    }
    else{
        return "This field is required."
    }
}