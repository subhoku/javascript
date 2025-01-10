// function welcomeMessage(){
// return "Welcome to Codeograph Solutions";
// }

// console.log(welcomeMessage());

function welcomeMessage(){
    return myWelcome();
}
function myWelcome(){
    return "MyWelcomeMessage";
}
console.log(welcomeMessage());
console.log("Direct function calling: "+myWelcome());
//"html","java development", "SQL/PLSQL"
function full_stack(args1,args2,args3){
    console.log(args1,args2,args3);
}
full_stack("html","java development", "SQL/PLSQL");
full_stack(); //undefined undefined undefined
full_stack("react.js","spring boot");//react.js spring boot undefined
full_stack(undefined,undefined,"react.js");
full_stack(null, null , null);
