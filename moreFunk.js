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

function displayForm(stageIds){
    for (const key of stageIds) {
        displayElement(key, atlas[key].styles);
      }
      
      function displayElement(id, styles) {
        const inputField = document.createElement("div");
      
        styles.slice(1).forEach(className => {
          inputField.classList.add(className);
        });
      
        const inputElement = document.createElement("input");
        inputElement.type = "text";
        inputElement.required = true;
      
        const labelElement = document.createElement("span");
        labelElement.textContent = styles[0];
      
        inputField.appendChild(inputElement);
        inputField.appendChild(labelElement);
    
        document.body.appendChild(inputField)
    }
}

function addStyle(key, newStyle) {
    atlas[key].styles.push(newStyle);
}

function delStyle(key, styleToDelete) {
    atlas[key]?.styles?.splice(atlas[key]?.styles?.indexOf(styleToDelete), 1);
  }

// function addMethodAtI(key, index, methodKey, value){
//     atlas[key].method[methodKey] = value
// }
function addMethodAtI(key, index, methodKey, value) {
    atlas[key].methods.splice(index, 0, { [methodKey]: value });
}

function delMethod(key, methodKey) {
    if (atlas[key] && atlas[key].methods) {
      delete atlas[key].methods[methodKey];
    }
  }
  
