
//how to sort the array
//declare the array
//use for loop as I want to access elements in array
//sorting processfor(inti=0;i<n-1;i++){
//swapped=false;

//for(int j=0;j<n-i-1;j++){
//comparison between 2 elements
//if(arr[0]>arr[1])==> number should swap
var arr = [32, 53, 63, 23, 12, 2, 4, 5];

for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            // Swap arr[j] and arr[j + 1]
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

arr.forEach(function(arr) {
    console.log(arr);
});
