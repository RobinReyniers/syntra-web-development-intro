console.log("~~~~~~~~~~~~~~TASK 1~~~~~~~~~~~~~~");
/**
 * Create some classes.
 * For inspiration what you can create, look around you 👀.
 * Some examples: furniture, animal, chair, teacher, student, person, tree, movie,...
 */

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("Hello, " + this.name + "is my name");
  }

  changename(newName) {
    this.name = newName;
    console.log("Hello, my new name is" + this.name);
  }
}

class Table {
  constructor(legs, width, height) {
    this.legs = legs;
    this.width = width;
    this.heigth = height;
  }
}

class Tree {
  constructor(age, species, height) {
    this.age = age;
    this.price = "€ 25000";
    this.height = height;
    this.species = species;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }
}

class Chair {
  constructor(legs, color) {
    this.legs = legs;
    this.color = color;
  }
}

class Dog {
  constructor(name, age, vaccinated) {
    this.name = name;
    this.age = age;
    this.vaccinated = vaccinated;
  }

  get name() {
    console.log(this.name);
    return this.name;
  }

  get age() {
    console.log(this.age);
    return this.age;
  }

  bark() {
    console.log("bark!");
  }

  dogBreed() {
    console.log("This dog is a" + this.breed);
    return this.breed;
  }
}

class Pomeranian extends Dog {
  constructor(name) {
    super(name);
    this.breed = "Pomeranian";
  }
}

class Corgi extends Dog {
  constructor(name) {
    super(name);
  }

  herd() {
    console.log("herd");
  }

  bark(name) {
    console.log("woof," + name);
  }

  dogBreed(breed)
}

class Word {
  constructor(word) {
    this.word = word;
  }

  getWordOfDay() {}

  checkWord() {}
}

class WeatherService {
  constructor(apiEndPoint, region) {
    this.apiEndPoint = apiEndPoint;
    this.region = region;
  }

  getTemperature() {
    fetch(this.apiEndPoint);
  }
}
console.log("~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~");
/**
 * Initialize all those classes you defined above using the new keyword.
 * Like this you are creating class instances you can use further along in your code.
 */

console.log("~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~");
/**
 * Define some methods for the classes you defined above. Think of methods like actions
 * the class you defined can make. A pet can have a feed method, a tree a grow method, a person
 * can talk, etc. Make sure to use the this keyword to refer to properties you assigned to the
 * class.
 *
 * Call these methods here.
 */

console.log("~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~");
/**
 * Create a superclass for some of your classes above and extend the class.
 * Add some methods to the superclass and try to call them.
 * What happens when you create the same method in the superclass and the more specific
 * class?
 */

console.log("~~~~~~~~~~~~~~TASK 5~~~~~~~~~~~~~~");
/**
 * Implement some private methods in your classes and use them in your methods.
 */

console.log("~~~~~~~~~~~~~~TASK 6~~~~~~~~~~~~~~");
/**
 * Create a calculator class using a fluent API
 * that does something like this:
 * calc
    .add(1, 2)
    .square()
    .display();
 */
class Calculator {
   constructor() {
      this.total = 0
   }

   add(number) {
      this.total += number
      return this
   }

   subtract(number) {
      this.total -= number
      return this
   }

   Multiply(number) {
      this.total * number
      return this
   }

   divide(number) {
      this.total / number
      return this
   }

   square(number) {
      this.total ** number
   }

   display() {
      return this.total
   }

   reset() {
      this.total = 0
      return this
   }
}

const calc = new Calculator()

class Stack {
   #stack
   constructor() {
      this.#stack = []
   }

   add(item) {
      this.#stack.push(item)
   }

   remove(item) {
       return this.#stack.pop(item)
   }

   peek() {
      return this.#stack[this.stack.length - 1]
   } 

}

class queue {
  constructor() {
    this.storage = []
  }

  enqueue(item) {
    this.storage.push(item)
  }

  dequeue() {
     return this.storage.shift(item)
  }

  peek() {
    return this.storage[this.storage.length - 1]
  }
}


