function initializeAtlas() {
const atlasConfig = {
    name: {
      styles: ["Name:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 3 },
        { maxLength: 20 }
      ],
    },
    lastName: {
      styles: ["Last Name:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 3 },
        { maxLength: 20 }
      ],
    },
    mail: {
      styles: ["E-Mail:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { valiMail: true }
      ],
    },
    bDay: {
      styles: ["Birthday:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { isValidDate: true }
      ],
    },
    addressLine1: {
      styles: ["Address Line 1:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 4 },
        { maxLength: 20 }
      ],
    },
    addressLine2: {
      styles: ["Address Line 2:", "inputField"],
      methods: [
        { enabled: true }
      ],
    },
    city: {
      styles: ["City:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 3 },
        { maxLength: 20 }
      ],
    },
    plz: {
      styles: ["ZIP Code:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 4 },
        { maxLength: 4 },
        { isInteger: true },
        // { includes: ['x', 'y', 'z'] },
      ],
    },
    phone: {
      styles: ["Phone:", "inputField"],
      methods: [
        { enabled: true }
      ],
    },
    mobile: {
      styles: ["Mobile:", "inputField"],
      methods: [
        { enabled: true },
        { hasInput: true },
        { minLength: 10 },
        { maxLength: 10 },
        { isInteger: true }
      ],
    },
    terms: {
      styles: ["Terms:", "inputField"],
      methods: [
        { enabled: true },
        { checked: true }
      ],
    },
  };

  const atlas = JSON.stringify(atlasConfig);
  sessionStorage.setItem('atlas', atlas);
  console.log('Atlas initialized in sessionStorage.');
};
// for (const key in atlas) {
//     displayElement(id, style, labelText) {
//         const inputField = document.createElement("div");
//         inputField.classList.add("inputField");

//         const inputElement = document.createElement("input");
//         inputElement.type = "text";
//         inputElement.required = true;

//         const labelElement = document.createElement("span");
//         labelElement.textContent = labelText;

//         inputField.appendChild(inputElement);
//         inputField.appendChild(labelElement);

//         document.body.appendChild(inputField);
//     }
//   }
