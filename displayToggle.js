function displayToggleButton(arr) {
    let id = arr[0];
    let btnText1 = arr[1];
    let btnText2 = arr[2];
    let toggleText = arr[3];

    // Get the container element
    let container = document.createElement('div');
    container.classList.add('toggleButtonContainer');

    // Create the first button
    let button1 = document.createElement('button');
    button1.classList.add('btn', 'toggled');
    button1.id = id + '1';
    button1.onclick = function() {
      toggleButtons(id + '1', id + '2');
    };

    // Create the elements inside the first button
    let btnTop1 = document.createElement('div');
    btnTop1.classList.add('btn__top', 'text');
    btnTop1.innerText = btnText1;

    let btnBottom1 = document.createElement('div');
    btnBottom1.classList.add('btn__bottom');

    let btnBase1 = document.createElement('div');
    btnBase1.classList.add('btn__base');

    // Append elements to the first button
    button1.appendChild(btnTop1);
    button1.appendChild(btnBottom1);
    button1.appendChild(btnBase1);

    // Create the toggle text
    let toggleTextElement = document.createElement('h2');
    toggleTextElement.classList.add('toggleText');
    toggleTextElement.innerText = toggleText;

    // Create the second button
    let button2 = document.createElement('button');
    button2.classList.add('btn');
    button2.id = id + '2';
    button2.onclick = function() {
      toggleButtons(id + '2', id + '1');
    };

    // Create the elements inside the second button
    let btnTop2 = document.createElement('div');
    btnTop2.classList.add('btn__top', 'text');
    btnTop2.innerText = btnText2;

    let btnBottom2 = document.createElement('div');
    btnBottom2.classList.add('btn__bottom');

    let btnBase2 = document.createElement('div');
    btnBase2.classList.add('btn__base');

    // Append elements to the second button
    button2.appendChild(btnTop2);
    button2.appendChild(btnBottom2);
    button2.appendChild(btnBase2);

    // Append elements to the container
    container.appendChild(button1);
    container.appendChild(toggleTextElement);
    container.appendChild(button2);

    // Create the outer div with the class "board"
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('board');

    // Append the container to the outer div
    outerDiv.appendChild(container);

    // Append the outer div to the body or any other desired element
    document.body.appendChild(outerDiv);
   
  }

  function toggleButtons(activeId, inactiveId) {
    // Your toggle logic here
    const activeButton = document.getElementById(activeId);
    const inactiveButton = document.getElementById(inactiveId);

    // Toggle the 'toggled' class on the active button
    activeButton.classList.toggle('toggled');

    // Remove the 'toggled' class from the inactive button
    inactiveButton.classList.remove('toggled');
}

  

  // Example usage
//   displayToggleButton('toggleButton', 'Button 1', 'Button 2', 'Weekly Newsletter');