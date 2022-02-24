

let product:any = {



'Name': 'Samsung TV',



'Price': 56000.55,



'Stock': true,



'Print': function(){



console.log(`Name=${this.Name}\nPrice=${this.Price}\nStock=${this.Stock}`);



}



}



product.Print();





let products:any[] = [



{



Name: 'TV',



Price: 56000.55



},



{



Name: 'Mobile',



Price: 23000.44



}



];



for(var item of products)

{
console.log(`${item.Name} - ${item.Price}`); 
}
