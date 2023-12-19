
// // Loop through objects with enabled set to true
// for (const key in config) {
//     const obj = config[key];
//     // Check if 'enabled' property exists and is true
    // if (obj.enabled === true) {
    //   // Loop through properties of the object
    //   for (const prop in obj) {
    //     if (obj.hasOwnProperty(prop)) {
    //       // Access and use the properties
    //       console.log(`${key}.${prop}: ${obj[prop]}`);
//         }
//       }
//     }
//   }
//config as inherited=>Element=>gameEngine=>displayElement in GameMain



class Form {
    static counter = 0;
    constructor() {
        // Automatically create an instance of InputField with the specified parameters
        const myInputField = new InputField("name", this.["stylesarray"], this.{methodarray}, this.getConfig());
        myInputField.displayInputField();
    }

    displayElement(id, style) {
        const inputField = document.createElement("div");
        style.slice(1).forEach(className => {
            inputField.classList.add(className);
          });

        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.required = true;

        const labelElement = document.createElement("span");
        labelElement.textContent = style[0];

        inputField.appendChild(inputElement);
        inputField.appendChild(labelElement);

        document.body.appendChild(inputField);
    }
    assemble(id, config) {
        const obj = config[id];

        if (obj && obj.enabled === true) {
            console.log(`Processing ${id}`);

            for (const prop in obj) {
                if (obj.hasOwnProperty(prop) && prop !== 'enabled') {
                    console.log(`${id}.${prop}: ${obj[prop]}`);
                }
            }
        }
    }
}

class InputField extends Form {
    constructor(id, label, style = [], methods = {}) {
        super(),
        this.id = id;
        this.label = label,
        this.style = style;
        this.methods = methods; 
    }

    displayInputField() {
        this.displayElement(this.id, this.style, this.label);
        this.assemble(this.id, this.getConfig);

    }
}



myInputField.displayInputField("phone", "lastName");
myInputField.displayInputField("phone", "phone");


const myInputField = new InputField("name", "Name", ["inputField"], { customMethod: () => console.log("Custom method executed") });
// Benis code
// const myForm = new Form(config);

// myForm.inputs.name;


// class InputElement{

//     let validations = {};
//     let id = "";
//     let name = "";
//     let label = "";
//     let value = "";
//     let placeholder = "";
//     let type = "";


//     constructor(item){
//         // erstellt die einzelnen inputElemente als Objekt
//         // verwendet die Logik, um aus der Struktur der config Datei ein InputElement zu bauen
//     }

// }


// class myForm{

//     // hier werden alle InputElemente gespeichernt
//     let inputs = {};

//     // hier werden beim Erstellen des Form Objekts alle InputElement aus der config datei erstellt
//     constructor(config){
//         config.forEach(function(item, key){
//             this.inputs.append(
//                 key : new InputElement(item)
//             )
//         })
//     }

//     function renderInputs(){
//         inputs.forEach()
//     }

//     function addElementToForm(element){
//         this.inputs.append(element)
//     }
// };

// Create an instance of the Form class
// const myForm = new Form("myElement", "myInputField", ["additionalStyle"], { customMethod: () => console.log("Custom method executed") });

// // Call the displayElement method
// myForm.displayElement("name", ["inputField"], "Name:");
// myForm.displayElement("lastName", ["inputField"], "Last Name:")
// myForm.displayElement("email", ["inputField"], "E-Mail:")
// myForm.displayElement("phone", ["inputField"], "Phone:")




// class Element {
//     constructor(id, style = [], methods = {}) {
//       this.id = id;
//       this.style = style;
//       this.methods = methods;
//     }
// }

// let element = new Element();

