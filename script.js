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

const displayLine1 = document.querySelector(".line1");
const displayLine2 = document.querySelector(".line2");

function addDigitToFirst(digit) {firstStr += digit}
function addDigitToSecond(digit) {secondStr += digit}
function addDigit(digit) {
    if (current === 'first') {addDigitToFirst(digit); displayLine2.innerHTML = firstStr}
    else if (current === 'second' || current === 'extra') {addDigitToSecond(digit); displayLine2.innerHTML = secondStr}
}
function chooseOp(op) {
    if (current === 'first') {
        current = 'second';
        operator = op;
        displayLine1.innerHTML += `${firstStr} ${operator}`;
        displayLine2.innerHTML = ``;
    } else if (current === 'second') {
        equals();
        operator = op;
        displayLine1.innerHTML = `${firstStr} ${operator}`;
        displayLine2.innerHTML = ``;
    } else if (current === 'extra') {
        operator = op;
        displayLine1.innerHTML = `${firstStr} ${operator}`;
        displayLine2.innerHTML = ``;
        current = 'second';
    }
}
function equals() {
    let x = parseInt(firstStr);
    let y = parseInt(secondStr);
    let result = operate(x, y, operator);
    displayLine1.innerHTML += ` ${secondStr}`
    displayLine2.innerHTML = `${result}`;
    firstStr = ''+result;
    secondStr = '';
}
function equalsHard() {
    current = 'extra';
    equals();
}
function fullReset() {
    firstStr = '';
    secondStr = '';
    operator = '';
    current = 'first';
    displayLine1.innerHTML = `&nbsp`;
    displayLine2.innerHTML = `0`;
}