class Animal {
      constructor(name) {
        this.name = name;
      }

      tells() {
        console.log(this.name +" makes a sound.");
      }
    }

    class Dog extends Animal {
      tells(){
        console.log(this.name +" barks.");
      }
    }

    const dog = new Dog("Dog");
    dog.speak(); // Dog barks.
  
