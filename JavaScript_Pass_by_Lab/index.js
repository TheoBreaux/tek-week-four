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

// const nLoc = {
//   city: "Rochester",
//   state: "New York",
//   zip: 14604,
// };

// moveLocation(personTwo, nLoc);

// nLoc.city = "Buffalo";
// nLoc.zip = 14201;

// console.log(personTwo.location.city);

// 2 Julie and Timmy have gotten married! Since they'll be living together, we should give them the same location. However, since they'll be living together forever, let's save ourselves the hassle of updating both of their locations every time they move. Set Julie's location to Timmy's location by reference. Test this new link by using the following code, which utilizes our already-completed moveLocation() function with no changes necessary. Do both people now live in California? (They both should.)

personTwo.location = personOne.location;

const nLoc = {
  city: "Mountain View",
  state: "California",
  zip: 94035,
};

moveLocation(personOne, nLoc);
console.log(personOne.location);
console.log(personTwo.location);

// As you can see, sometimes linking objects by reference is useful. Now, whenever one person moves, the other follows.