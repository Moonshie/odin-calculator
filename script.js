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

console.log(operate(23, 78, '*'));