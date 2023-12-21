// initializeAtlas();
// setTimeout(() => {  console.log('timed!'); }, 1000);
// getAtlas('atlas');
// // gameLoop()
// // nextStage()
// setTimeout(() => {  console.log('timed!'); }, 1000);
// let stageIds = ["name", "addressLine1", "mail" ,"phone"]
// addId('plz');
// delId('mail');
// setTimeout(() => {  console.log('timed!'); }, 1000);
// displayForm(stageIds);
// //gameLogic



// gameLoop()

// let stage = 0;

// while(true) {
//     stage++
//     getAtlas(atlas);
//     displayForm(atlas);
//     validator(loopThrouInputs);
//     saveAtlas(atlas, atlas);
// }

// {john} [doe]
// @mixin scss with ids
// let validated = false;
let stageIds = []
sessionStorage.setItem("stage", 0);
initializeAtlas();
gameLoop()

function isValid() {
   
}

function validator(callback) {
    if (valiDat()) {

    // Simulating asynchronous validation (replace with actual async logic)
    setTimeout(() => {
      const isValid = true;
      
      if (isValid) {
        callback(true); // Validation successful
      } else {
        callback(false); // Validation failed
      }
    }, 1000); // Simulating a delay, e.g., for an async operation
  }
}
  // Example usage
  function handleValidationResult(isValid) {
    if (isValid) {
      console.log('Validation successful! Proceed to the next step.');
      // Call the next function or perform the next step in your workflow
    } else {
      console.log('Validation failed. Please correct the input and try again.');
      // Display an error message or prompt the user to correct the input
    }
  }
  
  // Trigger validation on button press
  const submitButton = document.getElementById('test');
  submitButton.addEventListener('click', function () {
    validator(handleValidationResult);
  });
    

// initializeAtlas();
function stageLoop(){
    
    getAtlas('atlas');
    // manipulate(atlas)
    displayForm(stageIds);
    if(isValid()) {
        saveAtlas(atlas, atlas);
        nextStage();
    }
    
}

function processMethods(key) {
    for (const funkObj of atlas[key].methods) {
        for (const funkKey in funkObj) {
          const funkValue = funkObj[funkKey];
          method[funkKey](key, funkValue);
        }}}
function valiDat() {
    // stageIds.forEach((key => {
    //     processMethods(key)
    // }));
    let nameValue = document.getElementById("name").value;
    // const nameValue = getValueById('name'); // Implement getValueById function
    if (nameValue.trim() !== '') {
        console.log("Validation passed");
        return true;
    } else {
        console.log("Validation failed");
        return false;
    }
}



function gameLoop() {
    const numIterations = 5;
    for (let i = 0; i < numIterations; i++) {
        const currStage = parseInt(sessionStorage.getItem('stage')) || 0;
        switch (currStage) {
            case 0:
                // initializeAtlas();
                addId('name');
                stageLoop();

                break;
            case 1:
                stageLoop();
                addId('mail');
                break;
            case 2:
                stageLoop();
                addId('lastName', 'addressLine1', 'addressLine2');
                break;
            case 3:
                stageLoop();
                addId('plz');
                break;
            // Add cases for other stages as needed
            default:
            // Handle the default case or loop back to the first stage
            currentStage = 0;
            break;
        }
        }
}
