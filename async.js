//5
let add = (num) => {
    return new Promise((resolve, reject) => {
        resolve(num + 1); // Resolving the promise by adding 1
    });
};

let sub = (num) => {
    return new Promise((resolve, reject) => {
        resolve(num - 1); // Resolving the promise by subtracting 1
    });
};

let multiply = (num) => {
    return new Promise((resolve, reject) => {
        resolve(num * 1); // Resolving the promise by multiplying by 1
    });
};
let divide = (num) => {
    return new Promise((resolve, reject) => {
        resolve(num / 1); // Resolving the promise by multiplying by 1
    });
};
async function calc() {
    try {
        let addRes = await add(5);
        console.log(`Addition Result: ${addRes}`);

        let subRes = await sub(addRes);
        console.log(`Subtraction Result: ${subRes}`);

        let mulRes = await multiply(subRes);
        console.log(`Multiplication Result: ${mulRes}`);
        let divRes= await divide(mulRes);
        console.log(`Division Result:${divRes} `);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

// Call the calc function to execute
calc();
