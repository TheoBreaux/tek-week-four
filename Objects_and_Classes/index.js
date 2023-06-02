// const person = {
//   name: {
//     first: "Elyan",
//     last: "Kemble",
//   },
//   age: 32,
//   location: {
//     city: "Garland",
//     state: "Texas",
//     zip: 75040,
//   },
//   occupation: "Front-End Developer",

// };

// function introduce() {
//   console.log(
//     `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
//   );
// }

// person.introduce = introduce;
// console.log(person);
// person.introduce();

// instantiate
class Animal {
  constructor(eyes, legs, isAwake, isMoving) {
    (this.eyes = eyes),
      (this.legs = legs),
      (this.isAwake = isAwake),
      (this.isMoving = isMoving);
  }
  sleep() {
    this.isAwake = false;
  }
  wake() {
    this.isAwake = true;
  }
  sit() {
    this.isMoving = false;
  }
  walk() {
    this.isMoving = true;
  }
  speak(sound) {
    console.log(sound);
  }
}

// object instantiation
const blue = new Animal(2, 2, false, false);

blue.speak("Woof");

console.log(blue);
