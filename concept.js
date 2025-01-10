var bigInt=128979283164964912739729437192791274964;
console.log(bigInt)
//typeof
console.log(typeof "hello");
console.log(typeof true);
console.log(typeof 348769.43);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);


let data=100;

console.log(data);
let a=5;
function xyz(){
    let a=4;
    //local variable 
}
console.log(a);
const db=50;

console.log(db);
const arr=[1,2,3,4,5];
//arr=[];
arr[0]=100;
arr[7]=200;
console.log(arr);

const obj={
    "frontend":"React.js",
    "backend": "Spring Boot",
    "database": "SQL/PLSQL"

}
console.log(obj);
obj.frontend="Angular 18";

console.log(obj);
obj.tools="Maven";
console.log(obj);
//Is it possible to add new content in const array obj??
var data1=Symbol(100);
//provides security to data
console.log(data1);