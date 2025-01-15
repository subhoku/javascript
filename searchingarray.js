var arr = [32, 53, 63, -23, 12, 2, 4, 5];

let searchNumber=12;

for(let i=0;i<=arr.length-1;i++){
    //arr[0]==12 && arr[0]>=0
    if(arr[i]==searchNumber && arr[i]>=0){
        console.log("Number is found at: "+i+" th position")
    }
    else{
        console.log("Number not found");
    }
}
