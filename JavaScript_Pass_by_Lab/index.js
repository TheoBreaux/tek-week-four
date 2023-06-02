const personOne = {
  name: {
    first: "Timmy",
    last: "Timtim",
  },
  age: 30,
  location: {
    city: "New York",
    state: "New York",
    zip: 10001,
  },
};

const personTwo = {
  name: {
    first: "Julie",
    last: "July",
  },
  age: 28,
  location: {
    city: "Albany",
    state: "New York",
    zip: 12201,
  },
};

// 1 People move location frequently. Create a new function moveLocation().moveLocation() should take one of our person objects as its first parameter and a location object as the second parameter.The location object will have the properties city, state, and zip.The function should change the city, state, and zip properties of the person to match those of the new location. Test your function by using the following code. Does personTwo now live in Rochester? (They should.)

const moveLocation = (personObj, locationObj) => {
  personObj.location.city = locationObj.city;
  personObj.location.state = locationObj.state;
  personObj.location.zip = locationObj.zip;
};

const newLoc = {
  city: "Rochester",
  state: "New York",
  zip: 14604,
};

moveLocation(personTwo, newLoc);

newLoc.city = "Buffalo";
newLoc.zip = 14201;

// console.log(personTwo.location.city);

// 2 Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move. Set Julie's location to Timmy's location by reference. Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.)

personTwo.location = personOne.location;

const newLoc2 = {
  city: "Mountain View",
  state: "California",
  zip: 94035,
};

moveLocation(personOne, newLoc2);

// console.log(personOne.location);
// console.log(personTwo.location);

// // As you can see, sometimes linking objects by reference is useful. Now, whenever one person moves, the other follows.

// 3 The happy couple are having a baby! Create a new object personThree.Set personThree.name.first to whatever you'd like, and personThree.name.last to a hyphenated combination of personOne and personTwo's last names. Give personThree an age of 0. Set personThree's location to that of their parents, by reference so that the baby stays with its family. Test your code's behavior by using your moveLocation() function.

const personThree = {
  name: {
    first: "Taylor",
    last: "July-Timtim",
  },
  age: 0,
  location: personOne.location,
};

moveLocation(personThree, newLoc2);

// console.log(personOne.location);
// console.log(personTwo.location);
// console.log(personThree.location);

// 4 Years go by, and personThree is ready for a life of independance.Increment everyone's age values by 20.Create a copy of personThree's location that breaks the reference to the current location object, and set their location to that copy.Test your code by having personThree moveLocation() somewhere of your choosing. Does this change the locations of personOne or personTwo? (It shouldn't.)

personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

// console.log(personOne.age, personTwo.age, personThree.age);

// Create a copy of personThree's location that breaks the reference to the current location object, and set their location to that copy.
personThree.location = { ...personThree.location };

const newLocation = {
  city: "Los Angeles",
  state: "California",
  zip: 90046,
};

moveLocation(personThree, newLocation);

// console.log(personOne.location);
// console.log(personTwo.location);
// console.log(personThree.location);


// 5  Welcome to the future! We've invented both immortality and cloning. Increment everyone's age values by 300. Create a new function clonePerson() that accepts one of our person objects and returns a deep copy of them with age set to 0. These are all independant clones, so each should be able to move to its own location. Test your code by creating several clones of our persons and using moveLocation() to send them elsewhere. Are these locations unaffected by each other? (They should be.) Check the age values of your original persons to make sure you did not accidentally set them to 0!

// 6 The hive mind has taken over... Create a new object called thoughts and give it some properties. Set personOne.thoughts to your thoughts object by reference. Do this for all of your persons and clones, such that changing the original thoughts object modifies the .thoughts property of every person. Test your code by modifying everyone's thoughts with a single line of code. Pass by reference is powerful.
