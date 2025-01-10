//soda machine example with javascript
//0,1,2,3,....soft_drink[0],....
const soda_drink=["coke","lemon","jaljira","beer"];
//displaying available drinks
console.log("Available drinks: ");
for(let i=0;i<=soda_drink.length-1;i++){
console.log(soda_drink[i]);
}
//user makes selection in real time application by giving inputs
let selection=1;
console.log("you selected: "+soda_drink[selection]);
//switch case to handle the choice
switch(selection){
    case 1:
        console.log("pay for coke soda");
        break;
        case 2:
        console.log("pay for lemon soda");
        break;
        case 3:
        console.log("Welcome to Jaljira");
        break;
        case "HDFC":
        console.log("Welcome to HDFC");
        break;
        case "Industrial":
        console.log("Welcome to Industrial");
        break;
       default:
        console.log("Incorrect bank selected");
        break;
}

