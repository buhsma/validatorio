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

function addStyle(key, newStyle) {
    atlas[key].styles.push(newStyle);
}

function delStyle(key, styleToDelete) {
    atlas[key]?.styles?.splice(atlas[key]?.styles?.indexOf(styleToDelete), 1);
  }

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
    const index = stageIds.indexOf(id);
    const x = stageIds.splice(index, 1);

}

function placeholder() {
    
}

function clearScreen() {
    const body = document.body;

    // Remove all child elements from the body
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}


// function toggleCheck() {
//     // Check if any button with "1" in its name has the 'toggled' class
//     const buttonsWithOne = document.querySelectorAll('[id*="1"]');
    
//     for (const button of buttonsWithOne) {
//         if (button.classList.contains('toggled')) {
//             newsLetterCounter++
//             highlight(button);
//             setTimeout(1000)
            
//         }
//     }
//   console.log(newsLetterCounter);
// }    
function toggleCheck() {
    // Check if any button with "1" in its name has the 'toggled' class
    const buttonsWithOne = document.querySelectorAll('[id*="1"]');

    let delay = 0;

    const promises = [];

    for (const button of buttonsWithOne) {
        if (button.classList.contains('toggled')) {
            newsLetterCounter++;
            const promise = new Promise(resolve => {
                setTimeout(() => {
                    highlight(button);
                    setTimeout(() => {
                        // Code to execute after a delay of 1000 milliseconds (1 second)
                        // For example, you can remove the 'highlighted' class
                        button.classList.remove('highlighted');
                        resolve(); // Resolve the promise when highlighting is complete
                    }, 1000);
                }, delay);
            });
            promises.push(promise);
            delay += 1000; // Adjust the delay between buttons (2 seconds in this example)
        }
    }
    if (promises.length === 0) {
        return Promise.resolve();
    }
    // Return a Promise that resolves when all highlighting is complete
    return Promise.all(promises);
}

// function highlight(innerDiv) {
//     let element = innerDiv.closest('.board');

//     element.scrollIntoView({ behavior: 'smooth', block: 'center' });

//     // Apply a scale animation
//     element.style.transition = 'transform 0.3s ease-in-out';
//     element.style.transform = 'scale(1.2)'; // You can adjust the scale factor as needed
// }

function highlight(innerDiv) {
    console.log(innerDiv)
    let element = innerDiv.closest('.board');
    console.log(element)
    
    
    
    
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    element.classList.add('highlight');
    console.log(element);
    // wait(5000);
    setTimeout(() => {
        // wait(4000);
        element.classList.remove('highlight');
    }, 1000); // Adjust the delay as needed
}


//     // Apply a scale animation and change background color
//     element.style.transition = 'transform 0.5s ease-in-out, background-color 0.5s ease-in-out';
//     element.style.transform = 'scale(1.5)';
//     element.style.backgroundImage = 'linear-gradient(#111111, #777777)';
//     console.log(element)
//     // Use setTimeout for a delay before resetting the styles
//     wait(1500);
//         // Clear the transition and reset the transform property
//         element.style.transition = '';
//         element.style.transform = 'scale(1)';
//         element.style.backgroundColor = '';
//         console.log(element)
// }



// function toggleCheck() {
//     // Check if any button with "1" in its name has the 'toggled' class
//     const buttonsWithOne = document.querySelectorAll('[id*="1"]');
    
//     for (const button of buttonsWithOne) {
//         if (button.classList.contains('toggled')) {
//             newsLetterCounter++;
//             button.scrollTo(0, 0);
            
//             // Log to check if the function is executed
//             console.log("Zooming in...");

//             // Zoom in on the toggled element
//             button.style.transition = 'transform 0.3s ease-in-out';
//             button.style.transform = 'scale(1.2)'; // You can adjust the scale factor as needed

//             // Listen for the 'transitionend' event to detect when the transition is complete
//             button.addEventListener('transitionend', function transitionEndHandler() {
//                 // Remove the event listener to prevent multiple executions
//                 button.removeEventListener('transitionend', transitionEndHandler);

//                 // Log to check if the animation is complete
//                 console.log("Zoom animation complete.");

//                 // Clear the transition and reset the transform property
//                 button.style.transition = '';
//                 button.style.transform = 'scale(1)';
//             }, { once: true });
//         }
//     }
// }
function wait(ms){
    let start = new Date().getTime();
    let end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }


  


 function typeMessage() {
    let index = 0; // Declare index within the closure of typeMessage
    const speed = 50; // Adjust the speed (in milliseconds) based on your preference

    function typeWriter() {
        let typedTextElement = document.querySelector('.hudBottom__center__message');
        
        console.log('tp running');
        console.log(textToType);
        
        if (index < textToType.length) {
            typedTextElement.innerHTML += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        }
    }

    // Start the typing effect
    typeWriter();
}

// // Start the typing effect when the page loads
// window.onload = function() {
//     typeMessage();
// };

