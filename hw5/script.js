function getNumFromPrompt(message) {
    let num;

    do {
        num = +prompt(message);
        console.log(num >= 20)
    }
    while (Number.isNaN(num) || num <= 4 || num > 20);
    return num;
}

function fillArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array[i] = getNumFromPrompt('Put a number');
    }
    return array;
}

function sortArray(array) {
    array = array.sort((a, b) => {
        return a - b
    })
    return array;
}

function printArray(array) {
    let arrayTemplate = array.join(' ');
    console.log(arrayTemplate);
    alert(arrayTemplate);
}

alert('Hello!');
let length = getNumFromPrompt('Put a length of a new array');

let newArray = fillArray(length);
newArray = sortArray(newArray);
printArray(newArray);