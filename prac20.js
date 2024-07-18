class Person {
    constructor(name, age) {
        if (arguments.length == 1) {
            this.name = name;
        }
         else {
            this.name = name;
            this.age = age;
        }
    }
}
let b = new Person("Vaidehi", 45)