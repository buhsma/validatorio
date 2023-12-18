function validateForm(){
    event.preventDefault()
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let password = document.getElementById("password").value;
    let mail = document.getElementById("mail").value;
    let bDay = document.getElementById("bDay").value;
    let addressLine1 = document.getElementById("addressLine1").value;
    let addressLine2 = document.getElementById("addressLine2").value;
    let city = document.getElementById("city").value;
    let plz = document.getElementById("plz").value;
    let phone = document.getElementById("phone").value;
    let mobile = document.getElementById("mobile").value;
    let agreeCheckbox = document.getElementById("checkbox").checked;
    let subscribeYes = document.getElementById("subscribeYes").checked;
    let subscribeNo = document.getElementById("subscribeNo").checked;
    let comments = document.getElementById("comments").value;





    if (subscribeYes) {
        window.location.href = "gotcha.html";
    }
    else;
        if (name.length > 2 && name.length < 11) {
            sessionStorage.setItem("first_name", name);
        }
        else;{
            displayError("name", "Invalid name. Must be 3-12 characters.");
        }
        if (lastName.length > 2 && lastName.length < 11) {
            sessionStorage.setItem("last_name", lastName);
        }
        else;{
            displayError("lastName", "Invalid name. Must be 3-12 characters.");
        }
    


    
    
}

function displayError(fieldId, message) {
    // Remove existing error message if any
    clearError(fieldId);

    // Create a new error message container
    let errorContainer = document.createElement("div");
    errorContainer.className = "errorMessage";
    errorContainer.textContent = message;

    let inputField = document.getElementById(fieldId);
    inputField.insertAdjacentElement('afterend', errorContainer);
}

function clearError(fieldId) {
    // Remove existing error message if any
    let existingError = document.querySelector(`#${fieldId} + .errorMessage`);
    if (existingError) {
        existingError.remove();
    }
}
// insertAdjacentElement('afterend', errorContainer);
// parentNode.append(errorContainer);

    
    sessionStorage.setItem("last_name", lastName);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("mail", mail);
    sessionStorage.setItem("bDay", bDay);
    sessionStorage.setItem("addressLine1", addressLine1);
    sessionStorage.setItem("addressLine2", addressLine2);
    sessionStorage.setItem("city", city);
    sessionStorage.setItem("plz", plz);
    sessionStorage.setItem("phone", phone);
    sessionStorage.setItem("mobile", mobile);
    sessionStorage.setItem("agreeCheckbox", agreeCheckbox);
    sessionStorage.setItem("subscribeYes", subscribeYes);
    sessionStorage.setItem("subscribeNo", subscribeNo);
    sessionStorage.setItem("comments", comments);

ckeckElements: 
bool: is on
additional values
Id


class checkElements {

    constructor(checks) {
        this.applyedChecks = applyedChecks


        if (checks.name) {

        }
    }
}

const config = {
    checks: {
      name: {
        enabled: true,
        checkMethods: [
          { method: 'hasInput', id: 'name', value: 'userInput' },
          { method: 'minLength', id: 'name', value: 'userInput', minLength: 3 },
          { method: 'maxLength', id: 'name', value: 'userInput', maxLength: 10 },
        ],
      },
      // Add more checks as needed
    },
    // Add other global configuration properties if necessary
  };
 const config = {
    checks: {
        enabled: true,
        checkMethods: [
            {hasInput(),
            minLength: 3,
            maxLength: 12,
            includes: [x, y, z]
        ]
    }
 }
 config.js 
 id: name
 enabled: true,
 hasInput: true,
 minLenght: 3,
 maxLength: 12,
 includes: [x, y, z]

 id: plz
 enabled: true,
 hasInput: true,
 minLenght: 3,
 maxLength: 12,
 isInteger: true

 id: terms 
 enabled: false
 checked: true


//  const methods = {
//     hasInput(value) {
//       if (value) {
//         // Perform action when value is truthy
//         console.log('Value is present:', value);
//       } else {
//         // Handle error when value is falsy
//         console.error('Error: Value is missing');
//       }
//     },
  
//     minLength(value, minLength) {
//       if (value.length >= minLength) {
//         // Perform action when value meets minLength criteria
//         console.log('Value meets minLength criteria:', value);
//       } else {
//         // Handle error when value is shorter than minLength
//         console.error('Error: Value does not meet minLength criteria');
//       }

// https://www.youtube.com/watch?v=BMphVl9suxA
    },
    const methods = {
        hasInput(id, value) {
          if (value) {
            placeholder(id);
          } 
          else {
            displayError(id, "Atleast try...");
          }
        },
      
        minLength(id, value, minLength) {
          if (value.length >= minLength) {
            placeholder(id);
          } 
          else {
            error(id, `Invalid name. Must be minimum ${minLenght} characters.`);
          }
        },
      
        maxLength(id, value, maxLength) {
          if (value.length <= maxLength) {
            placeholder(id);
          } 
          else {
            error(id, `Invalid name. Must be maximum ${maxLength} characters.`);
          }
        },
      

      };
      

