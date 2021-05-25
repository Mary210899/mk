alert('Hello!');
const a = +prompt('Enter the number 1, please:');
const b = +prompt('Enter the number 2, please:');

const results = `Calculations are finished!
Sum: ${a}+${b}=${a+b}
Diff: ${a}-${b}=${a-b}
Mult: ${a}*${b}=${a*b}
Div: ${a}/${b}=${a/b}`
console.log(results);
alert(results)