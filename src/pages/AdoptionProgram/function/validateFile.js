export default function (valueFile) {
    // const validExtensions = ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'];
    // const maxSize = 1000000; // 1MB in bytes
  
    if ( !valueFile) {
      return "This field is required.";
    }
    else{
      return true;
    }
  
    // for (let file of valueFile) {
    //   const fileExtension = file.name.split('.').pop().toLowerCase();
    //   if (!validExtensions.includes(fileExtension)) {
    //     return `Invalid file type. Only ${validExtensions.join(', ')} files are allowed.`;
    //   }
  
    //   if (file.size > maxSize) {
    //     return `File size should not exceed ${maxSize / 1000000}MB.`;
    //   }
    // }
  

  }
  