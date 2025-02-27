const person = {
    name: "Partha",
    age: 22,
    isDeveloper: true,
    greet: function() {
      console.log(`Hello, my name is ${person.name}`);
    }
  };
  
  //console.log(person.name);  
 // person.greet();   
  
 const car = new Object();
car.brand = "Tesla";
car.model = "Model S";
car.year = 2024;
//console.log(car);

function Person(name, age,add) {
    this.name = name;
    this.age = age;
    this.add = "kolkata"
  }
  
  const user = new Person("partha", 22,);
  //console.log(user)
  //console.log(`addres of ${user.name} is ${user.add}`);

  class Animal {
    constructor(name, sound) {
      this.name = name;
      this.sound = sound;
    }
  
    makeSound() {
      console.log(`${this.name} says ${this.sound}`);
    }
  }
  
  const dog = new Animal("Dog", "Woof");
  const cat = new Animal("cat", "meu");
 // dog.makeSound();
  //cat.makeSound();

  const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { ...obj1 }; // Shallow copy
obj2.b.c = 5; // Changes obj1 too!

// Deep copy
const obj3 = JSON.parse(JSON.stringify(obj1));

  