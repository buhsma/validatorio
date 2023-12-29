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

    

// // initializeAtlas();
// function stageLoop() {
//     getAtlas('atlas');
//     // manipulate(atlas)
//     displayForm(stageIds);
  
//     const submitButton = document.getElementById('test');
//     submitButton.addEventListener('click', function () {
//         await processMethods();
//         saveAtlas(atlas, atlas);
//         nextStage();
//     });
//   }





// Trigger validation on button press
// const submitButton = document.getElementById('test');
// submitButton.addEventListener('click', function () {
// processMethods();
// });
let stageIds = []
sessionStorage.setItem("stage", 0);
initializeAtlas();
gameLoop()


// function stageLoop() {
//     getAtlas('atlas');
//     // manipulate(atlas)

//     const submitButton = document.getElementById('test');
    
//     submitButton.addEventListener('click', async function () {
//         // Disable the button to prevent multiple clicks
//         submitButton.disabled = true;

//         try {
//             await processMethods();
//             // If successful, saveAtlas and move to the next stage
                
//             console.log("resolve works");
//             saveAtlas('atlas', atlas);
//             nextStage();
//         } catch (error) {
//             console.error('Error in processMethods:', error);
//             // Handle the error as needed
//         } finally {
//             // Enable the button again, whether the processing succeeded or failed
//             submitButton.disabled = false;
//         }
//     });
// }

// async function stageLoop() {
//     getAtlas('atlas');
//     // manipulate(atlas)

//     const submitButton = document.getElementById('test');

//     submitButton.addEventListener('click', async function () {
//         // Disable the button to prevent multiple clicks
//         submitButton.disabled = true;

//         try {
//             await processMethods();
//             // If successful, saveAtlas and move to the next stage
//             console.log("resolve works");
//             saveAtlas('atlas', atlas);
//             nextStage();
//         } catch (error) {
//             console.error('Error in processMethods:', error);
//             // Handle the error as needed
//         } finally {
//             // Enable the button again, whether the processing succeeded or failed
//             submitButton.disabled = false;
//         }
//     });
// }

function stageLoop() {
    return new Promise((resolve, reject) => {
        getAtlas('atlas');
        // manipulate(atlas)

        const submitButton = document.getElementById('test');

        submitButton.addEventListener('click', async function () {
            // Disable the button to prevent multiple clicks
            submitButton.disabled = true;

            try {
                await processMethods();
                // If successful, saveAtlas and move to the next stage
                console.log("resolve works");
                saveAtlas('atlas', atlas);
                nextStage();
                resolve(); // Resolve the promise when the processing is complete
            } catch (error) {
                console.error('Error in processMethods:', error);
                reject(error); // Reject the promise if an error occurs
            } finally {
                // Enable the button again, whether the processing succeeded or failed
                submitButton.disabled = false;
            }
        });
    });
}

function gameLoop() {
    let i = 0
    while(i < 3) {
        i++;
        stageLoop().then(() => {
            saveAtlas('atlas', atlas);
            nextStage();
            console.log("Button pressed, and processing complete.");
        }).catch(error => {
            // Handle errors that occur during processingMethods or button press
            console.error('Error in stageLoop:', error);
        });
    clearScreen();
    
        const currStage = parseInt(sessionStorage.getItem('stage')) || 0;
        switch (currStage) {
            case 0:
                console.log(`currStage: ${currStage}`)
                // initializeAtlas();
                addId('name');
                addId('lastName');
                displayForm(stageIds);

                break;
            case 1:
                console.log(`currStage: ${currStage}`)
                addId('plz');
                displayForm(stageIds);
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
        
        // async function processMethods() {
        //     let validationFailed = false;
        
        //     for (const key of stageIds) {
        //         const input = document.getElementById(key)?.value ?? "";
        
        //         for (const funkObj of atlas[key].methods) {
        //             for (const funkKey in funkObj) {
        //                 const funkValue = funkObj[funkKey];
        //                 const result = method[funkKey](key, funkValue, input);
        
        //                 if (result === false) {
        //                     validationFailed = true;
        //                     break;
        //                 }
        //             }
        
        //             if (validationFailed) {
        //                 break;
        //             }
        //         }
        //     }
        
        //     if (!validationFailed) {
        //         console.log("All methods passed. Proceeding to the next stage.");
        //         console.log(atlas); // Log the atlas object
        //         saveAtlas('atlas', atlas);
        //         nextStage();
        //         resolve();
        //     } else {
        //         console.log("Validation failed. Some methods did not pass.");
        //         reject(new Error("Validation failed."));
        //     }
        // }
        
        // async function processMethods() {
        //     return new Promise((resolve, reject) => {
        //         let validationFailed = false;
        
        //         for (const key of stageIds) {
        //             const input = document.getElementById(key)?.value ?? "";
        
        //             console.log(key);
        
        //             for (const funkObj of atlas[key].methods) {
        //                 for (const funkKey in funkObj) {
        //                     const funkValue = funkObj[funkKey];
        //                     console.log(funkKey, key, funkValue);
        //                     const result = method[funkKey](key, funkValue, input);
        
        //                     if (result === false) {
        //                         console.log(`Stopping loop due to false result from ${funkKey}`);
        //                         validationFailed = true;
        //                         break;
        //                     } else {
        //                         console.log(`Method ${funkKey} passed`);
        //                     }
        //                 }
        
        //                 if (validationFailed) {
        //                     break;
        //                 }
        //             }
        //         }
        //     });
        //         if (!validationFailed) {
        //             console.log("All methods passed. Proceeding to the next stage.");
        //             console.log(atlas); // Log the atlas object
        //             saveAtlas('atlas', atlas);
        //             nextStage();
        //             resolve();
        //         } else {
        //             console.log("Validation failed. Some methods did not pass.");
        //             reject(new Error("Validation failed."));
        //         }
        //     }

        // async function processMethods() {
        //     return new Promise((resolve, reject) => {
        //         let validationFailed = false;
        
        //         for (const key of stageIds) {
        //             const input = document.getElementById(key)?.value ?? "";
        
        //             console.log(key);
        
        //             for (const funkObj of atlas[key].methods) {
        //                 for (const funkKey in funkObj) {
        //                     const funkValue = funkObj[funkKey];
        //                     console.log(funkKey, key, funkValue);
        //                     const result = method[funkKey](key, funkValue, input);
        
        //                     if (result === false) {
        //                         console.log(`Stopping loop due to false result from ${funkKey}`);
        //                         validationFailed = true;
        //                         break;
        //                     } else {
        //                         console.log(`Method ${funkKey} passed`);
        //                     }
        //                 }
        
        //                 if (validationFailed) {
        //                     break;
        //                 }
        //             }
        //         }
        
        //         if (!validationFailed) {
        //             console.log("All methods passed. Proceeding to the next stage.");
        //             // Additional logic after successful validation
        //             resolve();
        //         } else {
        //             console.log("Validation failed. Some methods did not pass.");
        //             reject(new Error("Validation failed"));
        //         }
        //     });
        // }