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
    return price;
  }
}

const pet = new Hamster("Theo", "Harry", 25);
console.log(pet);

