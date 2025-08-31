function arithmetic(num1, num2, op) {
    switch (op) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        case '%': return num1 % num2;
        default: return "Invalid operator";
    }
}

function square(num) {
    return num * num;
}

function cube(num) {
    return num * num * num;
}

function factorial(n) {
    if (n < 0) return "Not possible";
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

function isEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}

function showArithmetic() {
    let a = parseInt(prompt("Enter first number:"));
    let b = parseInt(prompt("Enter second number:"));
    let op = prompt("Enter operator (+,-,*,/,%)");
    let result = arithmetic(a, b, op);
    document.getElementById("output").innerHTML =
        `Result of ${a} ${op} ${b} = <b>${result}</b>`;
    console.log(result);
}

function showSquareCube() {
    let n = parseInt(prompt("Enter a number:"));
    document.getElementById("output").innerHTML =
        `Square of ${n} = <b>${square(n)}</b><br>Cube of ${n} = <b>${cube(n)}</b>`;
    console.log("Square:", square(n), "Cube:", cube(n));
}

function showFactorial() {
    let n = parseInt(prompt("Enter a number:"));
    let result = factorial(n);
    document.getElementById("output").innerHTML =
        `Factorial of ${n} = <b>${result}</b>`;
    console.log(result);
}

function showEvenOdd() {
    let n = parseInt(prompt("Enter a number:"));
    let result = isEvenOdd(n);
    document.getElementById("output").innerHTML =
        `${n} is <b>${result}</b>`;
    console.log(result);
}
