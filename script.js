const display = document.getElementById("display"); //target the display ID, functions will display in input bar

//function assigned to the onclick event handler and will display the value associated with the btn
function displayInput(input) { 
    display.value += input;
}

//function assigned to onclick event handler and will return empty string in display when clicked
function clearDisplay() {
    display.value = "";
}

//function assigned to onclick event handler and will calculate what is present in the display
function calculate() {
    try {
        display.value = eval(display.value); //not good practice to use eval() alone so pass it in try catch statement for error handling
    } catch {
        display.value = "404"; //will display 404 aka error if the result of input will be invalid
    }
}