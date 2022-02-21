let msg: String="hello";
console.log(msg);
let values: any[]=[10,"sudarshan",45.21];
console.log(values);
let variation: String[]=["Ambika","Mishra","sudarshan"];
console.log(variation);
let value:any[]=new Array();
value[0]="sudarshan";
value[1]=23.45;
value[2]=12;

//tuple is collection of various types of values
//it's an array collection of different types of values

//use map for iterating the values
let x:number[]=[1500,2500,4300,7800,5600];
let result:number[]=x.filter(function(value){
return value>4300;
} );
console.log(`Result=${result}`);

let y:any[]=[1500,2500,"sudarshan","bhople","Shreyansh"];
for(var properties in y){
    console.log(`${y[properties]}`)
}
y.map(function(value) {
    console.log(value);
})
