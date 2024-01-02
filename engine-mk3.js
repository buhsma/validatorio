
async function gameLoop() {
    getAtlas('atlas')
    let errorId = '';
    let errorMessage = '';
    await toggleCheck();
    
    
    const isAllTrue = processMethods();
    console.log('return allTrue:', isAllTrue )
    if (isAllTrue) {
        console.log('allTrue')
        nextStage();
        manipulateAtlas();
        saveAtlas('atlas', atlas);
        clearScreen();
        displayForm(stageIds);
        displayHUD()
    }
    else {
        
        console.log('noatallTrue')
        clearScreen();
        displayForm(stageIds);
        displayHUD();
        
        
        displayStoredError()

        console.log(errorId)
        console.log(errorMessage)
    }
    }
    
    


function processMethods() {
    let isAllTrue = true; // Assume all validations are true initially

    for (const key of stageIds) {
        const input = document.getElementById(key)?.value ?? "";

        for (const funkObj of atlas[key].methods) {
            for (const funkKey in funkObj) {
                const funkValue = funkObj[funkKey];
                const result = method[funkKey](key, funkValue, input);

                if (!result) {
                    // If result is false, set isAllTrue to false and break out of the loop
                    isAllTrue = false;
                    break;
                }
            }

            if (!isAllTrue) {
                // If isAllTrue is false, break out of the outer loop as well
                break;
            }
        }
    }

    // Return the final result
    return isAllTrue;
    
}


function manipulateAtlas() {
    const currStage = parseInt(sessionStorage.getItem('stage')) || 0;
            switch (currStage) {
                case 1:
                    console.log(`currStage: ${currStage}`)
                    // initializeAtlas();
                    stageIds = ['name', 'lastName', 'blankToggle']
                    textToType = 'Hello, this is a typing effect in JavasScript!';
                    break;
                case 2:
                    console.log(`currStage: ${currStage}`)
                    stageIds = ['plz', 'addressLine1', 'addressLine2', 'blankToggle', 'dailyToggle', 'weeklyToggle', 'monthlyToggle']
                    textToType = "Hello, this is a typing effect in JavaScript!";
                 
                    break;
                case 3:
                    console.log(`currStage: ${currStage}`)
                    addId('lastName', 'addressLine1', 'addressLine2');
                    break;
                case 4:
                    
                    addId('plz');
                    break;
                // Add cases for other stages as needed
                default:
                // Handle the default case or loop back to the first stage
                currentStage = 0;
                break;
            }
            }



// displayTermsCheckbox()
// displayToggleButton('toggleDayly', 'YEAH Please', 'Please NO', 'Dayly Newsletter');
// displayToggleButton('toggleWeekly', 'YAYA', 'NONO', 'Weekly Newsletter');

// let errorId = 'name';

// let errorMessage =`Invalid input. Must be minimum ${minLength} characters.`;

// document.getElementById("toggleButton1").addEventListener("click", function() {
//     this.classList.toggle("toggled");

//     // Select the element with the class 'btn__top'
//     const btnTop = this.querySelector('.btn__top');

//     // Check if the element with the class 'btn__top' exists before trying to manipulate its pseudo-element
//     if (btnTop) {
//         btnTop.classList.toggle("toggled");
//     }

//     // Toggle the 'toggled' class on the element with the class 'btn__bottom'
//     this.querySelector('.btn__bottom').classList.toggle("toggled");
// });

// document.getElementById("toggleButton2").addEventListener("click", function() {
//     this.classList.toggle("toggled");
//     this.querySelector('.btn__top::after').classList.toggle("toggled");
//     this.querySelector('.btn__bottom').classList.toggle("toggled");
// });
function toggleButtons(toggledButtonId, otherButtonId) {
    const toggledButton = document.getElementById(toggledButtonId);
    const otherButton = document.getElementById(otherButtonId);

    toggledButton.classList.toggle('toggled');
    otherButton.classList.remove('toggled');
}




 


let stageIds = ['name']
let newsLetterCounter = 0;
sessionStorage.setItem("stage", 0);
let textToType = 'Hello, let`s start with your name.';
initializeAtlas();
getAtlas('atlas');
displayForm(stageIds);
displayHUD();