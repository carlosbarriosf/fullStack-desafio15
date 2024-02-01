const userInputDisplayContainer = document.querySelector('.calc__userInput');
const userInputDisplay = document.querySelector('[data-userInput]');
const numberButtons = Array.from(document.querySelectorAll('[data-number]'));
const operationDisplay = document.querySelector('[data-operation]');

let fontSize = 4;

let lastButtonClicked = null;

const operationBtns = Array.from(document.querySelectorAll('[data-control-btn]'));
console.log(operationBtns)

document.addEventListener('click', (e) => {

    if(e.target && e.target.tagName === 'BUTTON') {
        lastButtonClicked = e;
    }
})

function adjustFontSize(factor) {
    if((userInputDisplay.offsetWidth > userInputDisplayContainer.offsetWidth) || (userInputDisplay.offsetHeight > userInputDisplayContainer.offsetHeight)) {            
        fontSize = fontSize * factor;
    }
    userInputDisplay.style.fontSize = `${fontSize}rem`
}

function removeErrorClass () {
    operationBtns.forEach(btn => {
        btn.classList.remove('error');
    })
}

function addErrorClass () {
    operationBtns.forEach(btn => {
        btn.classList.add('error');
    })
}

function activateButton(button) {
    button.classList.add('activateButton');
}

function deactivateButton(button) {
    button.classList.remove('activateButton')
}


document.addEventListener('keydown', (e) => {
    console.log(e.code)
    switch (e.code) {
        case "Numpad0":
            const button0 = document.querySelector('[value = "0"]');
            button0.click();
            activateButton(button0);
        break;
        case "Numpad1":
            const button1 = document.querySelector('[value = "1"]');
            button1.click();
            activateButton(button1);
        break;
        case "Numpad2":
            const button2 = document.querySelector('[value = "2"]');
            button2.click();
            activateButton(button2);
        break;
        case "Numpad3":
            const button3 = document.querySelector('[value = "3"]');
            button3.click();
            activateButton(button3);
        break;
        case "Numpad4":
            const button4 = document.querySelector('[value = "4"]');
            button4.click();
            activateButton(button4);
        break;
        case "Numpad5":
            const button5 = document.querySelector('[value = "5"]');
            button5.click();
            activateButton(button5);
        break;
        case "Numpad6":
            const button6 = document.querySelector('[value = "6"]');
            button6.click();
            activateButton(button6);
        break;
        case "Numpad7":
            const button7 = document.querySelector('[value = "7"]');
            button7.click();
            activateButton(button7);
        break;
        case "Numpad8":
            const button8 = document.querySelector('[value = "8"]');
            button8.click();
            activateButton(button8);
        break;
        case "Numpad9":
            const button9 = document.querySelector('[value = "9"]');
            button9.click();
            activateButton(button9);
        break;
        case "NumpadAdd":
            const buttonAdd = document.querySelector('[value = "+"]');
            buttonAdd.click();
            activateButton(buttonAdd);
        break;
        case "NumpadSubtract":
            const buttonSubtract = document.querySelector('[value = "-"]');
            console.log(buttonSubtract)
            buttonSubtract.click();
            activateButton(buttonSubtract);
        break;
        case "NumpadMultiply":
            const buttonMultiply = document.querySelector('[value = "*"]');
            buttonMultiply.click();
            activateButton(buttonMultiply);
        break;
        case "NumpadDivide":
            const buttonDivide = document.querySelector('[value = "/"]');
            buttonDivide.click();
            activateButton(buttonDivide);
        break;
        case "Delete":
            const buttonDelete = document.querySelector('[data-clear]');
            buttonDelete.click();
            activateButton(buttonDelete);
        break;
        case "Backspace":
            const buttonBackspace = document.querySelector('[data-backspace]');
            buttonBackspace.click();
            activateButton(buttonBackspace);
        break;
        case "NumpadEnter":
            const buttonEnter = document.querySelector('[value = "="]');
            buttonEnter.click();
            activateButton(buttonEnter);
        break;
        case "NumpadDecimal":
            const buttonDecimal = document.querySelector('[value = "."]');
            buttonDecimal.click();
            activateButton(buttonDecimal);
        break;
    }
})

document.addEventListener('keyup', (e) => {
    switch (e.code) {
        case "Numpad0":
            const button0 = document.querySelector('[value = "0"]');
            deactivateButton(button0);
        break;
        case "Numpad1":
            const button1 = document.querySelector('[value = "1"]');
            deactivateButton(button1);
        break;
        case "Numpad2":
            const button2 = document.querySelector('[value = "2"]');
            deactivateButton(button2);
        break;
        case "Numpad3":
            const button3 = document.querySelector('[value = "3"]');
            deactivateButton(button3);
        break;
        case "Numpad4":
            const button4 = document.querySelector('[value = "4"]');
            deactivateButton(button4);
        break;
        case "Numpad5":
            const button5 = document.querySelector('[value = "5"]');
            deactivateButton(button5);
        break;
        case "Numpad6":
            const button6 = document.querySelector('[value = "6"]');
            deactivateButton(button6);
        break;
        case "Numpad7":
            const button7 = document.querySelector('[value = "7"]');
            deactivateButton(button7);
        break;
        case "Numpad8":
            const button8 = document.querySelector('[value = "8"]');
            deactivateButton(button8);
        break;
        case "Numpad9":
            const button9 = document.querySelector('[value = "9"]');
            deactivateButton(button9);
        break;
        case "NumpadAdd":
            const buttonAdd = document.querySelector('[value = "+"]');
            deactivateButton(buttonAdd);
        break;
        case "NumpadSubtract":
            const buttonSubtract = document.querySelector('[value = "-"]');
            deactivateButton(buttonSubtract);
        break;
        case "NumpadMultiply":
            const buttonMultiply = document.querySelector('[value = "*"]');
            deactivateButton(buttonMultiply);
        break;
        case "NumpadDivide":
            const buttonDivide = document.querySelector('[value = "/"]');
            deactivateButton(buttonDivide);
        break;
        case "Delete":
            const buttonDelete = document.querySelector('[data-clear]');
            deactivateButton(buttonDelete);
        break;
        case "Backspace":
            const buttonBackspace = document.querySelector('[data-backspace]');
            deactivateButton(buttonBackspace);
        break;
        case "NumpadEnter":
            const buttonEnter = document.querySelector('[value = "="]');
            deactivateButton(buttonEnter);
        break;
        case "NumpadDecimal":
            const buttonDecimal = document.querySelector('[value = "."]');
            deactivateButton(buttonDecimal);
        break;
    }
})

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeErrorClass();
        if(lastButtonClicked && (lastButtonClicked.target.value === "+" || lastButtonClicked.target.value === "-" || lastButtonClicked.target.value === "*" || lastButtonClicked.target.value === "/") ) {
            userInputDisplay.innerText = button.value;
            fontSize = 4;
        } else if (lastButtonClicked && lastButtonClicked.target.value === "=") {
            operationDisplay.innerText = "";
            userInputDisplay.innerText = button.value;
            fontSize = 4;
        } else {
            if(userInputDisplay.innerText.length > 1 && button.value !== "0") {
                userInputDisplay.innerText += button.value;
            } else if (userInputDisplay.innerText.length === 1 && userInputDisplay.innerText === "0") {
                userInputDisplay.innerText = button.value
            } else {
                userInputDisplay.innerText += button.value;
            }
        }
        adjustFontSize(0.9)
    })
})


const clearBtn = document.querySelector('[data-clear]');

clearBtn.addEventListener('click', () => {
    fontSize = 4;
    adjustFontSize(1);
    userInputDisplay.innerText = "0";
    operationDisplay.innerText = "";
    removeErrorClass();
})

const backspace = document.querySelector('[data-backspace]');
// console.log(backspace)

backspace.addEventListener('click', ()=> {
   let string = userInputDisplay.innerText;
   console.log(string)
   console.log(string !== "0")
   if(string !== "0") {
       string = string.slice(0, -1)
       if(string.length >= 1) {
           userInputDisplay.innerText = string;
       } else {
            userInputDisplay.innerText = "0";
       }
    } 
})

const float = document.querySelector('[data-float]');

float.addEventListener('click', () => {

    if(lastButtonClicked && (lastButtonClicked.target.value === "+" || lastButtonClicked.target.value === "-" || lastButtonClicked.target.value === "*" || lastButtonClicked.target.value === "/") ) {
        userInputDisplay.innerText = `0${float.value}`;
    } else if(lastButtonClicked.target.value === "=") {
        operationDisplay.innerText = "";
        userInputDisplay.innerText = `0${float.value}`;
        console.log("hola")
    } else {
        if(userInputDisplay.innerText.indexOf(float.value) === -1) {
        userInputDisplay.innerText += float.value;
        }
    }
})

//operation handling

function getOperator(term) {
    const arrayOfOperation = operationDisplay.innerText.split(" ");

    let operator = arrayOfOperation[1];
    let result;

    switch(operator) {
        case '+':
            result = parseFloat(arrayOfOperation[0]) + term;
            break;
        case '-':
            result = parseFloat(arrayOfOperation[0]) - term;
            break;
        case '*':
            result = parseFloat(arrayOfOperation[0]) * term;
            break;
        case '/':
            result = parseFloat(arrayOfOperation[0]) / term;
            break;
    }
    return result;
}

function operationHandler (opButton) {
    const term = parseFloat(userInputDisplay.innerText);
    if (operationDisplay.innerText === "") {
        operationDisplay.innerText = userInputDisplay.innerText + " " + opButton.value;
    } else {
        let result = getOperator(term);
        if(result === Infinity) {
            userInputDisplay.innerText = "No se puede dividir entre cero";
            adjustFontSize(0.5)
            addErrorClass();
            operationDisplay.innerText = "";
        } else {
            operationDisplay.innerText = result;
            userInputDisplay.innerText = operationDisplay.innerText;
            operationDisplay.innerText = operationDisplay.innerText + " " + opButton.value;
            let factor = userInputDisplay.innerText.length;
            if(factor > 12) {
                adjustFontSize(0.5);
            }
        }
    }
}

//addition

const addBtn = document.querySelector('[data-addition]');

addBtn.addEventListener('click', () => {
    console.log(parseFloat(userInputDisplay.innerText));
    operationHandler(addBtn);
})

//substraction

const substractBtn = document.querySelector('[data-substraction]');

substractBtn.addEventListener('click', () => {
    operationHandler(substractBtn)
})

//product

const productBtn = document.querySelector('[data-product]');

productBtn.addEventListener('click', () => {
    operationHandler(productBtn);
})

//division

const divisionBtn = document.querySelector('[data-division]');

divisionBtn.addEventListener('click', () => {
    operationHandler(divisionBtn);
})

//equality

const equalityBtn = document.querySelector('[data-equals]');

equalityBtn.addEventListener('click', () => {
    const term = parseFloat(userInputDisplay.innerText);
    if (lastButtonClicked && lastButtonClicked.target.value === "=") {
        clearBtn.click();
        return
    }
    if (operationDisplay.innerText === "") {
        operationDisplay.innerText = userInputDisplay.innerText + " " + equalityBtn.value;
    } else {
        const operation = operationDisplay.innerText + " " + userInputDisplay.innerText + " " + equalityBtn.value;

        console.log(operation)

        operationDisplay.innerText = operation;
        
        let result = getOperator(term)

        if(result === Infinity) {
            userInputDisplay.innerText = "No se puede dividir entre cero";
            adjustFontSize(0.5)
            addErrorClass();
        } else {
            userInputDisplay.innerText = result;
            let factor = userInputDisplay.innerText.length;
            if(factor > 10) {
                adjustFontSize(0.5);
            }
        }
    
    }
})