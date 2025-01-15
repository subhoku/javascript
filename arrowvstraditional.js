// function greet(name){
//     return "hello, "+name;
// }
// //traditional function
// console.log(greet("sudarshan"));

//arrow function have shorterr and more consize syntax
//arrow function:

// const greet=(name)=>{
//     return "Hello, "+name;

// };
// console.log(greet("sudarshan"));
// const multiply=(a,b)=>a*b;
// console.log(multiply(2,3));

//using traditional function
var arr = [32, 53, 63, -23, 12, 2, 4, 5];
const doubleNumber=arr.map(function(arr){
    return arr*2;
});
console.log(doubleNumber);
//by using arrow function:
const doubleNumArrow=arr.map(arr=>arr*2);
console.log(doubleNumArrow);

