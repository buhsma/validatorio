function displayTermsCheckbox() {
    // Get the container element
    const container = document.createElement('div');
    container.classList.add('termsCheckbox');

    // Create the label element
    const label = document.createElement('label');

    // Create the checkbox input element
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create the span for styling the checkbox
    const checkboxSpan = document.createElement('span');
    checkboxSpan.classList.add('checkbox');

    // Append the checkbox and span to the label
    label.appendChild(checkbox);
    label.appendChild(checkboxSpan);

    // Create the terms message paragraph
    const termsMessage = document.createElement('p');
    termsMessage.classList.add('terms-message');

    // Create the link element
    const link = document.createElement('a');
    link.href = '#';
    link.target = '_blank';
    link.appendChild(document.createTextNode('read'));

    // Append the link to the terms message
    termsMessage.appendChild(document.createTextNode('Please '));
    termsMessage.appendChild(link);
    termsMessage.appendChild(document.createTextNode(' and accept the terms'));

    // Append the label and terms message to the container
    container.appendChild(label);
    container.appendChild(termsMessage);

    // Create the outer div with the class "board"
    const outerDiv = document.createElement('div');
    outerDiv.classList.add('board');

    // Append the container to the outer div
    outerDiv.appendChild(container);

    // Append the outer div to the body or any other desired element
    document.body.appendChild(outerDiv);
}