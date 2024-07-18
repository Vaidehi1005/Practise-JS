class Person {
    constructor(name) {
        this.name = name;
    }

    greet = () => {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person = new Person("Abhi");
person.greet(); 