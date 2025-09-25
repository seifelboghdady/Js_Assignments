/*
function Car(name, model, price) {
  this.n = name;
  this.m = model;
  this.p = price;
}
*/

class Car{
    constructor(name, model, price){
        this.name= name;
        this.model = model;
        this.price= price;
    }

    run() {
        return `Car Is Running Now`
    }
    stop(){
        return `Car Is Stopped`
    }
}


//create three object 
let car1 = new Car("merseds", "E2O10", 130.2);
let car2 = new Car("totyta", "E2O10", 155);
let car3 = new Car("BMW", "E2O10", 397);

//print in same format
console.log(`Car One Name Is ${car1.name} And Model Is ${car1.model} And Price Is ${car1.price}`)
console.log(car1.run())