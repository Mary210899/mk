alert('Hello!');
console.log("")
do {
    const operation = prompt('Choose (+, -, *, /, sin, cos, pow):');
    let a;
    do {
        a = +prompt('First operand:');
    } while (isNaN(a))
    let b, result;
    if (operation == '+' || operation == '-' || operation == '*' || operation == '/' || operation == 'pow') {
        do {
            b = +prompt('Second operand:');
        } while (isNaN(b))
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
} while (confirm('Do you want to repeat?'))