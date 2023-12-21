/* 
class InputField extends Form {
    constructor(id, label, style = [], methods = []) {
        super(id, label, style, methods);
    }

    displayInputField() {
        displayElement(this.id, this.styleClasses, this.label);
        // this.assemble(this.id, config);
    }
} */


class InputField {
  constructor(config) {
    this.id;            // input field identifier
    this.type;          // type of input field like "text"
    this.styleClasses;  // Array of style class strings
    this.methods;       // Array of key-value pairs that associate functions

    this.initialize(config);
  }

  initialize(config) {
    this.setProperty("id", config.id, "my-default-id");
    // TODO: type, styleClass ...
  }

  setProperty(name, value, defaultValue) {}

  draw() {} 
}

class TextInputField extends InputField() {}


class CheckboxInputField extends InputField() {}






function displayForm(stageIds) {
    for (const key of stageIds) {
        const form = new Form(key, config[key].styles, config[key].methods);
        console.log(key, config[key].styles, config[key].methods)
        form.displayForm();
    }
}


function displayElement(id, styles) {
    const inputField = document.createElement("div");

    styles.slice(1).forEach(className => {
        inputField.classList.add(className);
    });

    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.required = true;
    inputElement.id = [id];

    const labelElement = document.createElement("span");
    labelElement.textContent = styles[0];

    inputField.appendChild(inputElement);
    inputField.appendChild(labelElement);

    document.body.appendChild(inputField);

}
const config = {
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


  displayForm(["mail", 'plz', 'phone', 'name']);