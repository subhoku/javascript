var products = ["Ambika", "Mishra", "sudarshan"];
for (var properties in products) {
    console.log("".concat(products[properties]));
}
var product = {
    Name: "Amazon Pay Services",
    Price: 2500,
    stock: true
};
console.log("Name=".concat(product.Name, "\nPrice=").concat(product.Price, "\nStock=").concat(product.stock));
var regex = /[A-Z]{10}/;
var value = "codeo";
if (value.match(regex)) {
}
