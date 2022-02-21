var msg = "hello";
console.log(msg);
var values = [10, "sudarshan", 45.21];
console.log(values);
var variation = ["Ambika", "Mishra", "sudarshan"];
console.log(variation);
var value = new Array();
value[0] = "sudarshan";
value[1] = 23.45;
value[2] = 12;
//tuple is collection of various types of values
//it's an array collection of different types of values
//use map for iterating the values
var x = [1500, 2500, 4300, 7800, 5600];
var result = x.filter(function (value) {
    return value > 4300;
});
console.log("Result=".concat(result));
var y = [1500, 2500, "sudarshan", "bhople", "Shreyansh"];
for (var properties in y) {
    console.log("".concat(y[properties]));
}
y.map(function (value) {
    console.log(value);
});
