var arr = [32, 53, 63, -24, 12, 2, 4, 5];
let arr2=[2.3,4.5];
const copyArray=[...arr];
console.log(copyArray);
const combinedArray=[...arr,...copyArray,...arr2];
console.log(combinedArray);
//using in function argument

function sum(a,b,c,d){
    return a+b+c;
}
const number=[1,2,3,4,5];
console.log("Answer of addition will be: "+sum(...number));

//copying objects

const orignalObject={a:1, b:2};
const copyObject={...orignalObject};
console.log(copyObject);
const normalObject={c:4, d:3};
const combineObject={...orignalObject,...normalObject}
console.log(combineObject);