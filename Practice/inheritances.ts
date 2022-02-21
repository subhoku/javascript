class Superclass{

    constructor(){
        console.log("Super Class Constructor");
    }

}
class Derieved extends Superclass{
    constructor(){
        super();
        console.log("Derieved class constructor");
        
            }
}
class Derieved1 extends Derieved{
    constructor(){
        super();
        console.log("Derieved classes Multilevel")
    }
}
 let obj=new Derieved1();
