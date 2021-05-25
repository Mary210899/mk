alert('Hello!');
const operation = prompt('Choose (+, -, *, /, sin, cos, pow):');
let a = +prompt('First operand:');
let b, result;
if (operation == '+' || operation == '-' || operation == '*' || operation == '/' || operation == 'pow') {
    b = +prompt('Second operand')
}
switch (operation) {
    case '+':
        result = a + b;
        break;
    case '-':
        result = a - b;
        break;
    case '*':
        result = a * b;
        break;
    case '/':
        result = a / b;
        break;
    case 'pow':
        result = Math.pow(a, b);
        break;
    case 'sin':
        result = Math.sin(a);
        break;
    case 'cos':
        result = Math.cos(a);
        break;
}
const operationFormedResult = `Result of operation ${operation} is ${result}`;
console.log(operationFormedResult);
alert(operationFormedResult);