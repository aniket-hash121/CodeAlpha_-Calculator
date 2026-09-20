let display = document.getElementById("display");

let firstNumber = "";
let secondNumber = "";
let operator = "";

function appendValue(value) {

    
    if (
        value == "+" ||
        value == "-" ||
        value == "*" ||
        value == "/"
    ) {

        firstNumber = display.value;

        operator = value;

       
        display.value = firstNumber + " " + operator + " ";

    }

    else {

        // If operator has been selected
        if (operator != "") {

            // Get only the second number
            secondNumber = display.value
                .replace(firstNumber + " " + operator + " ", "");

            display.value += value;

        }

        else {

            display.value += value;

        }

    }
}


function calculate() {

    // Get second number
    secondNumber = display.value
        .replace(firstNumber + " " + operator + " ", "");

    let num1 = Number(firstNumber);
    let num2 = Number(secondNumber);

    let result;


    if (operator == "+") {

        result = num1 + num2;

    }

    else if (operator == "-") {

        result = num1 - num2;

    }

    else if (operator == "*") {

        result = num1 * num2;

    }

    else if (operator == "/") {

        result = num1 / num2;

    }


    display.value = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
}


function clearDisplay() {

    display.value = "";

    firstNumber = "";

    secondNumber = "";

    operator = "";
}


function deleteLast() {

    display.value = display.value.slice(0, -1);

}