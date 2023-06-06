class Hamster {
  constructor(owner = "", name, price = 15) {
    this.owner = owner;
    this.name = name;
    this.price = price;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

const pet = new Hamster("Theo", "Harry", 25);
// console.log(pet);

class Person {
  constructor(
    name = "Jeff",
    age = 0,
    height = 0,
    weight = 0,
    mood = 0,
    hamsters = [],
    bankAccount = 0
  ) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.mood = mood;
    this.hamsters = hamsters;
    this.bankAccount = bankAccount;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  eat() {
    this.weight++;
    this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp() {
    this.age++;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster() {
    this.hamsters.push(pet);
    this.mood += 10;
    this.bankAccount -= pet.getPrice();
  }
}

// Create A Story

// 1 Instantiate a new Person named Timmy.
const timmy = new Person("Timmy");
console.log(timmy);

// 2 Age Timmy five years.
timmy.age += 5;
console.log(timmy.age);

// 3 At this point, Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times to improve his mood.
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();
timmy.eat();

console.log(timmy);

// 4 Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times.

timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();
timmy.exercise();

// 5 Age Timmy 9 more years.
timmy.age += 9;

// 6 Create a Hamster named "Gus."
const gus = new Hamster("Theo", "Gus", 35);

// 7 Set Gus's owner to the string "Timmy."
gus.owner = "Timmy";
console.log(gus);

// 8 Have Timmy "buy" Gus.
timmy.buyHamster();
console.log(timmy);

// 9 Age Timmy more 15 years.
timmy.age += 15;

// 10 Have Timmy eat twice
timmy.eat();
timmy.eat();

// 11 Have Timmy exercise twice.
timmy.exercise();
timmy.exercise();

// Chefs Make Dinners

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  prepareDinner(appetizer, entree, dessert) {
    return new Dinner(appetizer, entree, dessert);
  }
}

const GordonRamsay = new Chef();

const dinner1 = GordonRamsay.prepareDinner(
  "Tater tots",
  "Hamburger",
  "Chocolate Shake"
);
const dinner2 = GordonRamsay.prepareDinner(
  "Seared scallops",
  "Halibut",
  "Parfait"
);
const dinner3 = GordonRamsay.prepareDinner(
  "Antipasta",
  "Fettucine Alfredo",
  "Tiramisu"
);

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);
