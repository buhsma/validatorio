/* class Form {
    static counter = 0;

    constructor(id, styleClasses, methods) {
        this.id = id;
        this.styleClasses = styleClasses;
        this.methods = methods;
    }

    displayForm() {
        const myInputField = new InputField(this.id, this.styleClasses, this.methods);
        myInputField.displayInputField();
    }
} */

class Form {
    constructor(config) {
        this.config = config;
        this.inputFields = [];
    }

    // build input field instances
    build() {
        // loop through this.config Array and create InputField objects.
        for (let i=0; i < this.config.length; i++) {
            let inputFieldConfig = this.config[i];
            let inputField = new InputField(inputFieldConfig);
            this.inputFields.push(inputField);
        }
    }

    // generate input fields using the configured field instances
    draw() {}
}