let products:  String[]=["Ambika","Mishra","sudarshan"];

for(var properties in products){
    console.log(`${products[properties]}`)
}

let product:object={
Name: "Amazon Pay Services",
Price: 2500,
stock: true
}

console.log(`Name=${product.Name}\nPrice=${product.Price}\nStock=${product.stock}`);

let regex:any= /[A-Z]{10}/;
let value:string="codeo";

