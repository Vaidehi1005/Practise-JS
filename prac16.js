class Address {
    constructor(street, city, state, zip) {
        this.street = street;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    getStreet() {
        return this.street;
    }

    getCity() {
        return this.city;
    }

    getState() {
        return this.state;
    }

    getZip() {
        return this.zip;
    }
}

class Person {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    getName() {
        return this.name;
    }

    getAddress() {
        return this.address;
    }
}

let address = new Address("123 Main", "Amreli", "Delhi", "12365");
let person = new Person("Johnny", address);
console.log(person.getName());
console.log(person.getAddress().getStreet().getCity().getState().getZip()); 