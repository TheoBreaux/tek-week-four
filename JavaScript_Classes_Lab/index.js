class Cat {
  constructor(eyes, legs, color) {
    this.eyes = eyes;
    this.legs = legs;
    this.color = color;
  }
  speak() {
    console.log("Meow");
  }
  move() {
    console.log("I am running");
  }
  sleep() {
    console.log("I am sleeping");
  }
}

const tabby = new Cat(2, 2, "black");
const garfield = new Cat(2, 4, "orange");

// console.log(tabby);
// console.log(garfield);

// tabby.speak();
// tabby.move();
// tabby.sleep();

// garfield.speak();
// garfield.move();
// garfield.sleep();

class Pirate {
  constructor(name, legs, weapon, polite, breathing) {
    this.name = name;
    this.legs = legs;
    this.weapon = weapon;
    this.polite = polite;
    this.breathing = breathing;
  }
  speak() {
    console.log("Rrrrrrrr!");
  }
  fight() {
    console.log("Weapon drawn!");
  }
  alive() {
    this.breathing = false;
  }
}

const jollyRoger = [
  new Pirate("Jack Sparrow", 1, "sword", true, true),
  new Pirate("Barbossa", 1, "sword", true, true),
  new Pirate("Elizabeth Swann", 2, "gun", false, true),
];

for (let i = 0; i < jollyRoger.length; i++) {
  console.log(jollyRoger[i].name);
  console.log(jollyRoger[i].weapon);
  console.log(jollyRoger[i].breathing);
}

const blackPearl = [
  new Pirate("Captain Hook", 2, "gun", false, true),
  new Pirate("Davy Jones", 1, "sword", true, true),
  new Pirate("Will Turner", 2, "gun", false, true),
];

for (let i = 0; i < blackPearl.length; i++) {
  console.log(blackPearl[i].name);
  console.log(blackPearl[i].weapon);
  console.log(blackPearl[i].breathing);
}
