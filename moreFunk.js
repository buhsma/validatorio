function saveAtlas(key, obj) {
    try {
        const serializedObj = JSON.stringify(obj);
        sessionStorage.setItem(key, serializedObj);
        console.log(`Object stored with key '${key}' in session storage.`);
    } catch (error) {
        console.error('Error storing object in session storage:', error);
    }
}

function getAtlas(key) {
    try {
        const serializedObj = sessionStorage.getItem(key);
        if (serializedObj !== null) {
            const obj = JSON.parse(serializedObj);
            console.log(`Object retrieved with key '${key}' from session storage.`);
            console.log(obj);
            window.atlas = obj;
            return obj;
        } else {
            console.log(`No object found with key '${key}' in session storage.`);
            return null;
        }
    } catch (error) {
        console.error('Error retrieving object from session storage:', error);
        return null;
    }
}
// let stageIds = ["name", "addressLine1", "mail" ,"phone"]
// initializeAtlas();
// getAtlas('atlas');
// displayForm(stageIds);


// function displayElement(key, styles) {
// const inputField = document.createElement("div");

// styles.slice(2).forEach(className => {
//     inputField.classList.add(className);
// });

// const inputType = styles[1];

// const inputElement = document.createElement("input");
// inputElement.type = inputType;
// inputElement.required = true;
// inputElement.id = key;

// const labelElement = document.createElement("span");
// labelElement.textContent = styles[0];

// const displayBox = document.createElement("div");
// displayBox.classList.add("displayBox");

// inputField.appendChild(inputElement);

// if (inputType === "radio") {
//     // Create two radio buttons
//     for (let i = 1; i <= 2; i++) {
//         const radioElement = document.createElement("input");
//         radioElement.type = "radio";
//         radioElement.name = `${key}_radio`;
//         radioElement.value = `Option ${i}`;
//         radioElement.id = `${key}_radio_${i}`;

//         const radioLabelElement = document.createElement("label");
//         radioLabelElement.textContent = `Option ${i}`;
//         radioLabelElement.setAttribute("for", `${key}_radio_${i}`);

//         inputField.appendChild(radioElement);
//         inputField.appendChild(radioLabelElement);
//     }
// }

// inputField.appendChild(labelElement);
// inputField.appendChild(displayBox);

// document.body.appendChild(inputField);


// }
    
    
    
    //   function displayElement(key, styles) {
    //     const inputField = document.createElement("div");
      
    //     styles.slice(2).forEach(className => {
    //       inputField.classList.add(className);
    //     });
      
    //     const inputElement = document.createElement("input");
    //     inputElement.type = styles[1];
    //     inputElement.required = true;
    //     inputElement.id = key;

      
    //     const labelElement = document.createElement("span");
    //     labelElement.textContent = styles[0];

    //     const displayBox = document.createElement("div");
    //     displayBox.classList.add("displayBox"); // Add the class 'displayBox' to the new div
      
    //     inputField.appendChild(inputElement);
    //     console.log(styles[1])
    //     if (styles[1] === "radio") {
    //         inputField.appendChild(inputElement);
    //     }
    //     inputField.appendChild(labelElement);
    //     inputField.appendChild(displayBox); // Append the new 'displayBox' div inside the 'inputField'
    
    //     document.body.appendChild(inputField)
    // }
    // // Create a button element
    // const button = document.createElement('button');

    // // Set the button's id attribute
    // button.id = 'test';

    // // Set the button's text content
    // button.textContent = 'test';

    // // Add an event listener to the button for the click event
    // button.addEventListener('click', gameLoop);

    // // Append the button to the document body or another desired element
    // document.body.appendChild(button);
    //     }

// function createInputElement(styles) {
//     const inputType = styles[1]; // Assuming the input type is specified in the second position of the styles array
//     let inputElement;

//     switch (inputType) {
//         case 'text':
//             inputElement = document.createElement("input");
//             inputElement.type = "text";
//             break;
//         case 'radio':
//             inputElement = document.createElement("input");
//             inputElement.type = "radio";
//             break;
//         case 'checkbox':
//             inputElement = document.createElement("input");
//             inputElement.type = "checkbox";
//             break;
//     }};
function addStyle(key, newStyle) {
    atlas[key].styles.push(newStyle);
}

function delStyle(key, styleToDelete) {
    atlas[key]?.styles?.splice(atlas[key]?.styles?.indexOf(styleToDelete), 1);
  }

// function addMethodAtI(key, index, methodKey, value){
//     atlas[key].method[methodKey] = value
// }
function addMethodAtI(key, index, methodKey, value) {
    atlas[key].methods.splice(index, 0, { [methodKey]: value });
}

function delMethod(key, methodKey) {
    if (atlas[key] && atlas[key].methods) {
      delete atlas[key].methods[methodKey];
    }
  }

function nextStage() {
let currentStage = sessionStorage.getItem('stage') || 0;
currentStage++;
sessionStorage.setItem('stage', currentStage);
}

function addId(id){
    stageIds.push(id)
 }

function delId(id) {
    // stageIds.slice(id)
    const index = stageIds.indexOf(id);
    const x = stageIds.splice(index, 1);

}

function placeholder() {
    
}

// function error(id, error) {
//     console.log(id, message)
// }
function clearScreen() {
    const body = document.body;

    // Remove all child elements from the body
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}