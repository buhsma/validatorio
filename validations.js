

const method = {

    enabled(id, value, input) {
      if (value)
      placeholder(id);
    console.log(id, 'check input: ', input)
    return true;
    },

    hasInput(id, value, input) {
      if (input !== "") {
        placeholder(id);
        console.log(id, 'check')
        return true;  
      } 
      else {
        displayError(id, "At least try...");
        console.log('error')
        return false;
      }
    },
  
    minLength(id, minLength) {
      const input = document.getElementById(id).value;
  
      if (input.length >= minLength) {
        placeholder(id);
        console.log(id, 'check')
        return true;
      }
      else {
        displayError(id, `Invalid input. Must be minimum ${minLength} characters.`);
        return false;
      }
    },
  
    maxLength(id, maxLength) {
      const input = document.getElementById(id).value;
  
      if (input.length <= maxLength) {
        placeholder(id);
        console.log(id, 'check', input)
        return true;
      }
      else {
        displayError(id, `Invalid input. Must be maximum ${maxLength} characters.`);
        return false;
      }
    },
  
    valiMail(id, value) {
      let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      const input = document.getElementById(id).value;
      if (input.match(validRegex)) {
        placeholder(id);
        return true;
      } 
      else {
        displayError(id, "Invalid email address. Please enter a valid email address and try again.");
        return false;
      }
    },
  //todo: all formats
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

    isInteger(id, value) {
      const input = document.getElementById(id).value;
      const regex = /^\d+$/;
      if (regex.test(input)) {
        placeholder(id);
        return true;
      }
      else {
        displayError(id, "Invalid input. Must me number 0-9");
        return false;
      }
    },

    checked(id, value) {
      if (atlas[id].type == 'toggle') {
        const buttonId = atlas[id].config[0];
        const btn1 = document.getElementById(`${buttonId}1`);
        const btn2 = document.getElementById(`${buttonId}2`);
        console.log(`${btn1.value} btn1`)
        console.log(`${btn2.checked} btn2`)
        if (btn1.classList.contains("toggled") || btn2.classList.contains("toggled")) {
              placeholder(id);
              return true;
          }
          else {
              displayError(id, "You have to choose one buddy");
              return false;
          }
        }
      else {
        //ckeckbox here does not make much sense
        placeholder();
      } 
    },
    

}




















function forBeni() {
  let name = document.getElementById("name").value;
  if (name) {
    console.log("passed");
    return true;  // Allow form submission
  } else {
    alert('badbad');
    return false; // Prevent form submission
  }
}
