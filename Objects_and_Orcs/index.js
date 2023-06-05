const adventurer = {
  name: "Timothy",
  hitpoints: 10,
  belongings: ["sword", "potion", "Tums"],
};

// Arrays within Objects
// console.log(adventurer.belongings[0]);
// console.log(adventurer.belongings[1]);
// console.log(adventurer.belongings[2]);

// Iterate Over an Array within an Object

for (let i = 0; i < adventurer.belongings.length; i++) {
  //   console.log(adventurer.belongings[i]);
}

// Object within an Object Our adventurer now has a companion! Our companion, a bat, is an object with its own properties. Add the companion object to the adventurer object:

adventurer.companion = { name: "Velma", type: "Bat" };

// console.log(adventurer);

// console.log(adventurer.companion);
// console.log(adventurer.companion.name);
// console.log(adventurer.companion.type);

// Object within an Object within an Object...
// Velma the bat also has a companion, a magical parasite called Tim.

// Let's add Tim to our data:

adventurer.companion.companion = { name: "Tim", type: "Parasite" };

// console.log(adventurer.companion.companion.type);

// Array within an Object within an Object within an Object.....Tim has a bag of holding and can carry an infinite number of belongings.

// Let's add an array of belongings to Tim:
adventurer.companion.companion.belongings = [
  "SCUBA tank",
  "Rogan josh",
  "health insurance",
];

// console.log(adventurer.companion.companion.belongings[2]);

class Tome {
  constructor(maker, spellType, serialNum) {
    this.maker = maker;
    this.spellType = spellType;
    this.serialNum = serialNum;
  }
  cast() {
    console.log("Casting a spell!");
  }
}

const fireTome = new Tome("Merlin", "Fire", 1);
// console.log(fireTome);


class Factory {
    constructor (maker) {
      this.maker = maker;
      this.tomes = [];
    }
    generateTome (spellType) {
      const newTome = new Tome(this.maker, spellType, this.tomes.length);
      this.tomes.push(newTome);
    }
    findTome (index) {
      return this.tomes[index];
    }
  }
  
  const merlin = new Factory('Merlin');
  merlin.generateTome('Fire');
  merlin.generateTome('Water');
  merlin.generateTome('Earth');
  merlin.generateTome('Air');
  console.log(merlin);
  console.log(merlin.findTome(0));

  const gandalf = new Factory('Gandalf');
gandalf.generateTome('Light');
gandalf.generateTome('Dark');
console.log(gandalf);
console.log(gandalf.findTome(0));