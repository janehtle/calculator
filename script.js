const display = document.getElementById("display"); //target the display ID, functions will display in input bar

//function assigned to the onclick event handler and will display the value associated with the btn
function displayInput(input) { 
    display.value += input;
}

//add event listener where you can type the operands and operator instead of clicking btns on screen
document.addEventListener("keydown", (event) => { //keydown, keypress, keyup - keydown better
    // console.log(event);
    const keys = event.key; //regex here didn't work, event.key will return string of key pressed

    if (/[\d.+\-*/]/.test(keys)) { //use .test for regular exp, .includes for comparing values against values
        displayInput(keys); //ref function
    } else if (keys === "Backspace") {
        display.value = display.value.slice(0, -1); //will splice/delete last character
    }
});

//func will return empty string in input field
function clearDisplay() {
    display.value = "";
}

//func that will calculate whats displayed in input field
function calculate() {
    try {
        display.value = eval(display.value); //not good practice to use eval() alone so pass in try catch statement for error handling
    } catch {
        display.value = "404"; 
    }
}


