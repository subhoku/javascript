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

(async()=>{
    let addRes=await add(10);
    let subRes=await sub(addRes);
    let mulRes=await multiply(subRes);
    console.log(addRes,subRes,mulRes);
})();