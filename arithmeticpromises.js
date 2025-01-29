// Function to add 2 numbers, returns a promise that resolves with the result
function add(a, b) {
    return new Promise((resolve) => {
        resolve(a + b); // Resolve the promise with the sum of a and b
    });
}

// Function to subtract 2 numbers, returns a promise that resolves with the result
function subtract(a, b) {
    return new Promise((resolve) => {
        resolve(a - b); // Resolve the promise with the difference of a and b
    });
}

// Function to multiply 2 numbers, returns a promise that resolves with the result
function multiply(a, b) {
    return new Promise((resolve) => {
        resolve(a * b); // Resolve the promise with the product of a and b
    });
}

// Function to divide 2 numbers, returns a promise that resolves with the result
function divide(a, b) {
    return new Promise((resolve, reject) => {
        if (b !== 0) {
            resolve(a / b); // Resolve the promise with the quotient of a and b
        } else {
            reject("Division by zero is not allowed"); // Reject the promise for division by zero
        }
    });
}

// Using the functions with promises
add(10, 5)
    .then((result) => {
        console.log(`Addition Result: ${result}`);
        return subtract(result, 3); // Returns a promise for subtracting 3 from the addition result
    })
    .then((result) => {
        console.log(`Subtraction Result: ${result}`);
    })
    .then((result) => {
        return multiply(4,result);
        console.log(`Multiplication Result: ${result}`);
    })
    .then((result) => {
        return divide(result,2);
        console.log(`Division Result: ${result}`);
    })
    .catch((error) => {
        console.error(`Error: ${error}`);
    });
