let promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello1");
    },5000);
});
let promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello2");
    },10000);
});
let promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello3");
    },15000);
});
//promise 1 will execute after 5sec==> 5000
//promise 2 will be executed after 10 sec
//promise 3 will be executed after 15 sec

//can we create more than 1 promise==> yup it is possible
promise1.then((positiveResponse)=>{
    console.log("positive response");
},(errorResponse)=>{
    console.log("Error response");
});
promise2.then((positiveResponse)=>{
    console.log("positive response by promise 2");
},(errorResponse)=>{
    console.log("Error response");
});
promise3.then((positiveResponse)=>{
    console.log("positive response by promise 3");
},(errorResponse)=>{
    console.log("Error response");
});
//how to consume 3 promises in 1 step which will execute sequentially
Promise.all([promise1,promise2,promise3]).then((positiveResponse)=>{
    console.log("positive response by usig all function");
},(errorResponse)=>{
    console.log("Error response in all function");
});
//to know which promise should be executed first in the process
//race function
//3 promises are there out of 3
//2nd one is bad promise
Promise.race([promise1,promise2,promise3]).then((positiveResponse)=>{
    console.log("positive response by usig race function");
},(errorResponse)=>{
    console.log("Error response in all function");
});
//all settled function
Promise.allSettled([promise1,promise2,promise3]).then((positiveResponse)=>{
    console.log("positive response by usig race function");
},(errorResponse)=>{
    console.log("Error response in all settled function");
});