const prop = 'age';
class User {
    constructor(name, age) {
        this.name = name;
        this[prop] = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const user = new User('Bhavya', 34);
user.displayInfo();
