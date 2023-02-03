function add(x, y) {return x + y}
function subtract(x, y) {return x - y}
function multiply(x, y) {return x * y}
function divide(x, y) {return x / y}

function operate(x, y, operator) {
    let result = 0;
    operator === '+' ? result = add(x,y) :
    operator === '-' ? result = subtract(x,y) :
    operator === '*' ? result = multiply(x,y) :
    operator === '/' ? result = divide(x,y) :
    alert("Error!");
    return result;
}

let firstStr = '';
let secondStr = '';
let operator = '';
let current = 'first';

function addDigitToFirst(digit) {firstStr += digit}
function addDigitToSecond(digit) {secondStr += digit}
function addDigit(digit) {
    if (current === 'first') {addDigitToFirst(digit); console.log(firstStr)}
    else if (current === 'second') {addDigitToSecond(digit); console.log(secondStr)}
}
function chooseOp(op) {
    if (current === 'first') {current = 'second'; operator = op; console.log(operator)}
}
function equals() {
    let x = parseInt(firstStr);
    let y = parseInt(secondStr);
    console.log(operate(x, y, operator));
}
function fullReset() {
    firstStr = '';
    secondStr = '';
    operator = '';
    current = 'first';
}