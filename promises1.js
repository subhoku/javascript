//producer ==> I have commited the promise
let promises1=new Promise((resolve,reject)=>{
    resolve("Tomorrow I'll discuss about DOM Manipulation");
})
//cosumer==> consumer is going to consume the promise
promises1.then((positiveResponse)=>{
    console.log("positive response");
},(errorResponse)=>{
    console.log("Error response");
}
)