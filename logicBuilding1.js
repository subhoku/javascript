//write a code to swap 2 numbers without using 3rd variable


var a=5;
var b=3;
console.log("Numbers before swapping will be: "+a+" "+b);

a=a+b;//==>(5=5+3)==> a=8
b=a-b//==>8-3==>b=5
a=a-b//==> 8-5==> a=3
console.log("Numbers after swapping will be: "+a+" "+b);