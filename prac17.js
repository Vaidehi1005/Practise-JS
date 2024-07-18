class Car {
    constructor(brand) {
        this.brand = brand;
    }

    showBrand() {
        console.log("This car is a ${this.brand}.");
    }
}

const car = new Car("Toyota");
car.showBrand(); 
