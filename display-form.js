function displayForm(stageIds){
    for (const key of stageIds) {

        const type = atlas[key].type;
        switch(type) {
            case 'text':
                displayElement(key, atlas[key].styles);
                break;

            case 'terms':
                displayTermsCheckbox();
                break;
            
            case 'toggle':
                displayToggleButton(key);
                break;
                
        }
        
    }   

    const counter = document.createElement("div");
    counter.classList.add("counter");
    counter.textContent = `${newsLetterCounter} Newsletters subscribed`;

    document.body.appendChild(counter);  
      
// Create a button element
const button = document.createElement('button');

// Set the button's id attribute
button.id = 'test';

// Set the button's text content
button.textContent = 'test';

// Add an event listener to the button for the click event
button.addEventListener('click', gameLoop);

// Append the button to the document body or another desired element
document.body.appendChild(button);
    }

    function displayElement(key, styles) {
        const inputField = document.createElement("div");
    
        styles.slice(2).forEach(className => {
            inputField.classList.add(className);
        });
    
        const inputType = styles[1];
    
        const inputElement = document.createElement("input");
        inputElement.type = inputType;
        inputElement.required = true;
        inputElement.id = key;
    
        const labelElement = document.createElement("span");
        labelElement.textContent = styles[0];
    
        const displayBox = document.createElement("div");
        displayBox.classList.add("displayBox");
    
        if (inputType === "radio") {
            const radioContainer = document.createElement("div"); // Container for radio buttons
    
            // Create two radio buttons
            for (let i = 1; i <= 2; i++) {
                const radioElement = document.createElement("input");
                radioElement.type = "radio";
                radioElement.name = `${key}_radio`;
                radioElement.value = `Option ${i}`;
                radioElement.id = `${key}_radio_${i}`;
    
                const radioLabelElement = document.createElement("label");
                radioLabelElement.textContent = `Option ${i}`;
                radioLabelElement.setAttribute("for", `${key}_radio_${i}`);
    
                radioContainer.appendChild(radioElement);
                radioContainer.appendChild(radioLabelElement);
            }
    
            inputField.appendChild(radioContainer);
        } else {
            // If not a radio button, append the main input element
            inputField.appendChild(inputElement);
        }
    
        inputField.appendChild(labelElement);
        inputField.appendChild(displayBox);
        // Create the outer div with the class "board"
        const outerDiv = document.createElement('div');
        outerDiv.classList.add('board');

        // Append the container to the outer div
        outerDiv.appendChild(inputField);

        // Append the outer div to the body or any other desired element
        document.body.appendChild(outerDiv);
        
    }