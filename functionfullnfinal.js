//Named function:
function handleButtonClick(a,b){
    console.log("Welcome to named function: "+(a+b));

}
handleButtonClick(332,32);
//Anonymous function passed to setTimeout to execute a task after a delay
setTimeout(function(){
    console.log("This message is displayed after 2 seconds")
},1000);

var arr = [32, 53, 63, -23, 12, 2, 4, 5];
const evenNumber=arr.filter(arr=> arr%2==0);
console.log(evenNumber);
//callback function
//to call api's 
//Rest Parameter function
//example logging messages
//function to log multiple message using rest parameter
//"Hello","how are you", "doing great","welcome to codeograph"
function logMessages(...message){
    message.forEach(message=> console.log(message))
}
//call the function with multiple arguments
logMessages("Hello","how are you", "doing great","welcome to codeograph","Welcome to JavaScript Session");
