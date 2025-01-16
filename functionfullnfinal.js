//Named function:
function handleButtonClick(a,b){
    console.log("Welcome to named function: "+(a+b));

}
handleButtonClick(332,32);
//Anonymous function passed to setTimeout to execute a task after a delay
setTimeout(function(){
    console.log("This message is displayed after 2 seconds")
},2000);
//arrow function is used to filter the logic
var arr = [32, 53, 63, -24, 12, 2, 4, 5];
const evenNumber=arr.filter(arr=> arr%2==0 && arr>=0);
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
logMessages("Hello","how are you", "doing great","welcome to codeograph","Welcome to JavaScript Session","sudarshan");
//the rest parameter messages allows the function to accept
//any (N )number of arguments

//default parameter functions example
function greetUser(name="guest"){
    console.log("Welcome "+name)
}
greetUser("sudarshan");
//call function without an argument uses default argument
//if I pass the argument it will consider argument on high priority

//Optional parameter functions

function displayUserInfo(name,age){
    //check if age is provided
    if(age!== undefined){
        console.log(`${name} is ${age} years old.`);
    }
    else{
        console.log(`Hello, ${name}!`);
    }
    
}
displayUserInfo("codeograph");//Hello codeograph
//The displayUserInfo function handles the age parameter as optional

//generators:
//function call
function* factorialGenerator() {  
    // Added * after function
    let number = 1;
    let result = 1;
    while (true) {
        result *= number;  // Calculate factorial
        yield `Factorial of ${number} is ${result}`;  // Yield the current factorial
        number++;  // Move to the next number
    }
}

const factorial = factorialGenerator();

console.log(factorial.next().value);  // Factorial of 1 is 1
console.log(factorial.next().value);  // Factorial of 2 is 2
console.log(factorial.next().value);  // Factorial of 3 is 6
console.log(factorial.next().value);  // Factorial of 4 is 24
console.log(factorial.next().value);  // Factorial of 5 is 120
console.log(factorial.next().value);  // Factorial of 6 is 720

//IIFE (Immediate invoked(executed) function expression)

const myModule=(function(){
    let privateVar="I am private";

    //not accessible outside the IIFE
    function privateFunction(){
        console.log(privateVar);
    }
    private function();
})

