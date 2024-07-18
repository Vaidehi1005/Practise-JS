class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getMake(){
        return this.make;
    }

    getModel() {
        return this.model;
    }

    getYear() {
        return this.year;
    }
}

let car = new Car("Toyota", "Corolla", 2012);
console.log(car.getMake()); 
console.log(car.getModel()); 
console.log(car.getYear()); 