var product = {
    'Name': 'Samsung TV',
    'Price': 56000.55,
    'Stock': true,
    'Print': function () {
        console.log("Name=".concat(this.Name, "\nPrice=").concat(this.Price, "\nStock=").concat(this.Stock));
    }
};
product.Print();
var products = [
    {
        Name: 'TV',
        Price: 56000.55
    },
    {
        Name: 'Mobile',
        Price: 23000.44
    }
];
for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
    var item = products_1[_i];
    console.log("".concat(item.Name, " - ").concat(item.Price));
}
