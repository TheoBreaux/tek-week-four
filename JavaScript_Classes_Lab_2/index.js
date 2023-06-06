class Governor {
  static state = "California";
  static politicalParty = "Democrat";
  static age = 57;
  static yearsOfExperience = 23;

  static setBudget() {
    console.log("The budget for this is $500,000");
  }
  static setStateOfEmergency() {
    console.log("This is a State of Emergency");
  }
  static pardon() {
    console.log("This person has been pardoned!");
  }
}

// console.log(Governor.state);
// console.log(Governor.politicalParty);
// console.log(Governor.age);
// console.log(Governor.yearsOfExperience);

// Governor.setBudget();
// Governor.setStateOfEmergency();
// Governor.pardon();

class Person {
  constructor(eyeColor, age, occupation) {
    this.eyeColor = eyeColor;
    this.age = age;
    this.occupation = occupation;
  }
  eat() {
    console.log("I am eating");
  }
  sleep() {
    console.log("I am sleeping");
  }
  breathe() {
    console.log("I am breathing");
  }
}

class PostalWorker extends Person {
  constructor(name, yearsOfExperience, location, eyeColor, age, occupation) {
    super(eyeColor, age, occupation);
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.location = location;
  }
  deliver() {
    console.log("Mail delivery complete");
  }
  refuel() {
    console.log("Delivery vehicle refueld");
  }
}

const newPostal1 = new PostalWorker(
  "Sam",
  5,
  "Boston",
  "Blue",
  34,
  "Postal Worker"
);
const newPostal2 = new PostalWorker(
  "Jessica",
  10,
  "Los Angeles",
  "Green",
  32,
  "Postal Worker"
);

// console.log(newPostal1);
// console.log(newPostal2);
// newPostal1.deliver();
// newPostal2.deliver();
// newPostal1.refuel();
// newPostal2.refuel();

class Chef extends Person {
  constructor(
    name,
    michelinStarChef,
    culinarySchool,
    eyeColor,
    age,
    occupation
  ) {
    super(eyeColor, age, occupation);
    this.name = name;
    this.michelinStarChef = michelinStarChef;
    this.culinarySchool = culinarySchool;
  }
  cook() {
    console.log("I can cook everything");
  }
  prepare() {
    console.log("I can prep as well");
  }
}

const chef1 = new Chef("Gordon Ramsay", true, true, "Brown", 54, "Chef");
const chef2 = new Chef("Gareth Blackstock", true, false, "Brown", 60, "Chef");

// console.log(chef1);
// console.log(chef2);

// chef1.cook();
// chef2.cook();

// chef1.prepare();
// chef2.prepare();

// One Step Further

class BankAccount {
  constructor(ownerName, balance, acctNum) {
    this.ownerName = ownerName;
    this.balance = balance;
    this.acctNum = acctNum;
  }
  deposit() {
    console.log("You made a deposit");
  }
  withdraw() {
    console.log("You made a withdrawal");
  }
}

class CheckingAccount extends BankAccount {
  constructor(ownerName, balance, acctNum, overdraftEnabled) {
    super(ownerName, balance, acctNum);
    this.overdraftEnabled = overdraftEnabled;
  }
  withdraw() {
    this.overdraftEnabled = true;
  }
}

class SavingsAccount extends BankAccount {
  withdraw() {
    console.log("Withdrawals are not allowed");
  }
}

const BankAccount1 = new BankAccount("Theo", 500, "003241");
const CheckingAccount1 = new CheckingAccount("Josh", 700, "0058217", true);
const SavingsAccount1 = new SavingsAccount("Kathy Jeffers", 1500, "001457");

console.log(BankAccount1);
BankAccount1.withdraw();

console.log(CheckingAccount1);
CheckingAccount1.withdraw();

console.log(SavingsAccount1);
SavingsAccount1.withdraw();
