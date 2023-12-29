let stageIds = []
sessionStorage.setItem("stage", 0);
initializeAtlas();
gameLoop()


async function waitForValidInput() {
    while (true) {
        const userInput = await getUserInput();
        const isValid = await processingMethods(userInput);

        if (isValid) {
            break;
        } else {
            displayInvalidInputMessage();
        }
    }
}

async function gameLoop() {
    while (true) {
        let atlas = await getAtlas('atlas');
        manipulateAtlas();
        clearScreen();
        displayForm(stageIds);
        const submitButton = document.getElementById('test');

        submitButton.addEventListener('click', async function () {
            // Disable the button to prevent multiple clicks
            submitButton.disabled = true;
        
            try {
                // Call processMethods and wait for it to complete
                await processMethods();
        
                // If processMethods completes without errors, enable the button for the next round
                submitButton.disabled = false;
        
                // Now you can proceed with the rest of your game loop logic if needed
                let atlas = await getAtlas('atlas');
                manipulateAtlas();
                clearScreen();
                displayForm(stageIds);
        
                // Save atlas after valid input
                await processMethods();
        
                // Proceed to the next stage
                saveAtlas();
                nextStage();
            } catch (error) {
                // If processMethods throws an error, handle it and enable the button for the next attempt
                console.error("Processing methods failed:", error.message);
                submitButton.disabled = false;
                // Optionally, you can display an error message or take other actions
            }
        })}};


// Other functions remain the same

function manipulateAtlas() {
const currStage = parseInt(sessionStorage.getItem('stage')) || 0;
        switch (currStage) {
            case 0:
                console.log(`currStage: ${currStage}`)
                // initializeAtlas();
                addId('name');
                addId('lastName');
                break;
            case 1:
                console.log(`currStage: ${currStage}`)
                addId('plz');
                break;
            case 2:
                console.log(`currStage: ${currStage}`)
                addId('lastName', 'addressLine1', 'addressLine2');
                break;
            case 3:
                
                addId('plz');
                break;
            // Add cases for other stages as needed
            default:
            // Handle the default case or loop back to the first stage
            currentStage = 0;
            break;
        }
        }
async function processMethods() {
    return new Promise((resolve, reject) => {
        let validationFailed = false;

        for (const key of stageIds) {
            const input = document.getElementById(key)?.value ?? "";

            for (const funkObj of atlas[key].methods) {
                for (const funkKey in funkObj) {
                    const funkValue = funkObj[funkKey];
                    const result = method[funkKey](key, funkValue, input);

                    if (result === false) {
                        validationFailed = true;
                        break;
                    }
                }

                if (validationFailed) {
                    break;
                }
            }
        }

        if (!validationFailed) {
            console.log("All methods passed. Proceeding to the next stage.");
            console.log(atlas); // Log the atlas object
            // saveAtlas('atlas', atlas);
            // nextStage();
            resolve(); // Resolve the promise
        } else {
            console.log("Validation failed. Some methods did not pass.");
            reject(new Error("Validation failed."));
        }
    });
}

async function gameLoop() {
    // Set up the event listener outside of the loop
    const submitButton = document.getElementById('test');
    submitButton.addEventListener('click', async function () {
        // Disable the button to prevent multiple clicks
        submitButton.disabled = true;

        try {
            // Call processMethods and wait for it to complete
            await processMethods();

            // If processMethods completes without errors, enable the button for the next round
            submitButton.disabled = false;

            // Now you can proceed with the rest of your game loop logic if needed
            let atlas = await getAtlas('atlas');
            manipulateAtlas();
            clearScreen();
            displayForm(stageIds);

            // Save atlas after valid input
            await processMethods();

            // Proceed to the next stage
            saveAtlas();
            nextStage();
        } catch (error) {
            // If processMethods throws an error, handle it and enable the button for the next attempt
            console.error("Processing methods failed:", error.message);
            submitButton.disabled = false;
            // Optionally, you can display an error message or take other actions
        }
    });

    while (true) {
        let atlas = await getAtlas('atlas');
        manipulateAtlas();
        clearScreen();
        displayForm(stageIds);

        // Continue your game loop logic here

        // For example:
        // await processMethods();
        // saveAtlas();
        // nextStage();
    }
}

// Start the game loop
gameLoop();
