

const methods = {
    hasInput(id, value) {
      if (value) {
        placeholder(id);
      } 
      else {
        displayError(id, "At least try...");
      }
    },
  
    minLength(id, value) {
      const { minLength } = config[id];
  
      if (value.length >= minLength) {
        placeholder(id);
      }
      else {
        error(id, `Invalid input. Must be minimum ${minLength} characters.`);
      }
    },
  
    maxLength(id, value) {
      const { maxLength } = config[id];
  
      if (value.length <= maxLength) {
        placeholder(id);
      }
      else {
        error(id, `Invalid input. Must be maximum ${maxLength} characters.`);
      }
    },
  
    valiMail(id, value) {
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
      if (value.match(validRegex)) {
        placeholder(id);
      } 
      else {
        error(id, "Invalid email address. Please enter a valid email address and try again.");
      }
    },
  //todo:
    isValidDate(id, dateString) {
      // Check if the input is a valid date string in the format dd:mm:yyyy
      const regex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
      if (!regex.test(dateString)) {
        return { isValid: false };
      }
  
      // Parse the date
      const [day, month, year] = dateString.split('-').map(Number);
  
      // Check if the date is valid
      const dateObject = new Date(year, month - 1, day); // Note: Months are zero-indexed in JavaScript
  
      if (isNaN(dateObject.getTime())) {
        return { isValid: false };
      }
  
      // Return the day, month, and year as an object
      return {
        isValid: true,
        day,
        month,
        year,
      }
    },

    checked(id, value) {
        if(value) {
            placeholder(id);
        }
        else {
            error(id, "Please accept the terms and conditions before proceeding.");
        }
    },
    

}