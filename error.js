function displayErrorField(fieldId, message) {
    // clearError(fieldId);

    let errorContainer = document.createElement("div");
    errorContainer.className = "errorMessage";
    
    
    let afterElement = document.createElement("div");
    afterElement.className = "errorMessage__text";
    afterElement.textContent = message;

    errorContainer.appendChild(afterElement);
    
    let inputField = document.getElementById(fieldId);

    if (!inputField) {
        // If the first attempt fails, try the alternative fieldId
        inputField = document.getElementById(fieldId + "1");
    }

    let boardContainer = inputField.closest('.board');
    boardContainer.insertAdjacentElement('afterend', errorContainer);
    // For the error slide in
    errorContainer.style.display = 'block';
}
            

function clearError(fieldId) {
    // Remove existing error message if any
    let existingError = document.querySelector(`#${fieldId} + .errorMessage`);
    if (existingError) {
        existingError.remove();
    }
}

let storedError = null; // Variable to store the error details

function displayError(errorId, errorMessage) {
    // Your implementation of displaying the error
    // For example, you can store the error details in a variable
    storedError = { errorId, errorMessage };
}
            

function displayStoredError() {
    if (storedError) {
        // Display the stored error using displayErrorField or any other mechanism
        displayErrorField(storedError.errorId, storedError.errorMessage);
        storedError = null; // Reset storedError after displaying it
        
    }
}
