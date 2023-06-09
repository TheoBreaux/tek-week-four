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
  toString() {
    return `This Animal has ${this.eyes} eyes and ${this.legs} legs. It ${
      this.isAwake ? "is" : "is not"
    } awake, and ${this.isMoving ? "is" : "is not"} moving.`;
  }
}

// object instantiation
const blue = new Animal(2, 2, false, false);
const jessy = new Animal(2, 2, true, true);
const cat1 = new Animal(2, 4, true, false);
const cat2 = new Animal(2, 4, false, false);
const dog1 = new Animal(2, 4, true, true);
const cow1 = new Animal(2, 4, true, false);

// console.log(blue);
// console.log(jessy);
// console.log(cat1.toString());

// console.log(blue.toString());

class Cat extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Meow...");
  }
  toString() {
    return super.toString("Cat");
  }
}

class Dog extends Animal {
  constructor(fur, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.fur = fur;
  }
  speak() {
    super.speak("Woof!");
  }
  toString() {
    return super.toString("Dog");
  }
}

class Cow extends Animal {
  constructor(hair, isAwake, isMoving) {
    super(2, 4, isAwake, isMoving);
    this.hair = hair;
  }
  speak() {
    super.speak("Moo!");
  }
  toString() {
    return super.toString("Cow");
  }
}

const blue2 = new Dog("Blue", false, false);
const cat11 = new Cat("Orange", true, false);
const cat22 = new Cat("Black and White", false, false);
const dog11 = new Dog("Gold", true, true);
const cow11 = new Cow("Brown", true, false);

// console.log(cat11);
// console.log(blue2.toString());
// console.log(cow11);

// EXERCISE

class Human extends Animal {
  constructor(
    firstName,
    lastName,
    age,
    occupation,
    city,
    state,
    isAwake,
    isMoving
  ) {
    super(2, 2, isAwake, isMoving);
    this.name = { first: firstName, last: lastName };
    this.age = age;
    this.occupation = occupation;
    this.location = { city: city, state: state };
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name.first} ${this.name.last}, and I'm a ${this.age}-year-old ${this.occupation} from ${this.location.city}, ${this.location.state}!`
    );
  }
}

const theo = new Human(
  "Theo",
  "Breaux",
  44,
  "Software Developer",
  "Los Angeles",
  "CA",
  true,
  true
);

// console.log(theo);
// theo.introduce();

class Learner {
  #grades = [];
  #name = {
    first: "",
    last: "",
  };
  #age;

  constructor(firstName, lastName, age) {
    this.#name.first = firstName;
    this.#name.last = lastName;
    this.#age = age;
  }
  get name() {
    return `${this.#name.first} ${this.#name.last}`;
  }
  get age() {
    return this.#age;
  }
  // set grades(grade) {
  //   // change the grade to a Number, in case it was provided as a String
  //   grade = Number(grade);
  //   // Only accept values between 0 and 100
  //   if (grade >= 0 && grade <= 100) {
  //     this.#grades.push(grade);
  //   }
  // }
  addGrades(...grades) {
    grades = grades.flat();
    grades.forEach((grade) => {
      grade = Number(grade);

      if (grade >= 0 && grade <= 100) {
        this.#grades.push(grade);
      }
    });
  }
  get grades() {
    return this.#grades;
  }
  get average() {
    const arr = [...this.#grades];
    arr.sort((a, b) => a - b).shift();
    console.log(arr);
    return arr.reduce((a, b) => a + b) / arr.length;
  }
}

const learnerTheo = new Learner("Theo", "Breaux", 44);

// console.log(learnerTheo.name);
// console.log(learnerTheo.age);

learnerTheo.addGrades(
  [95, 87, 66],
  "98",
  "100",
  -60,
  88,
  89,
  [100, 76, 88],
  105
);

// console.log(learnerTheo.grades);
// console.log(learnerTheo.average);

// Factory Function
const learnerFactory = (firstName, lastName, age) => {
  const introduce = () => console.log(`Hi, I'm ${firstName} ${lastName}!`);
  return { name: firstName + " " + lastName, age, introduce };
};

const learner1 = learnerFactory("John", "Seen", 46);

// Constructor Function
const aLearner1 = (firstName, lastName, age) => {
  this.name = firstName + " " + lastName;
  this.age = age;
  this.introduce = () => console.log(`Hi, I'm ${firstName} ${lastName}!`);
};

const learner2 = new Learner("Ed", "Dantes", 23);
