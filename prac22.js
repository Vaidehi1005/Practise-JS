class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    startEngine() {
        console.log("Engine started of " + this.make + this.model);
    }
}

let car = new Car("BMW", "M5")
console.log(car.startEngine())