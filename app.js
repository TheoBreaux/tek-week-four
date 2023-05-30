// function sayHello(name) {
//     console.log('Hello ' + name + '!');
// }

// sayHello('Theo');

// const sayHello = function(name) {
//     console.log('Hello ' + name + '!');
// };

// sayHello('Theo');

// const add = (a, b) => a + b;

// console.log(add(2,2))

// function areBothEven(n1, n2) {
//     return !(n1 % 2) && !(n2 % 2);
//   }

//   console.log(areBothEven(12, 4));

// function computeArea(width, height) {
//   return `The area of a triangle with a width of ${width} and a height of ${height} is ${
//     width * height
//   }`;
// }

// console.log(computeArea(2, 2));

// const planetHasWater = function (planet) {
//   if (planet === "Earth" || planet === "Mars") {
//     return true;
//   }
//     return false;
// };

// console.log(planetHasWater("Jupiter"));

// function getDevObject(name) {
//     let skills = [];
//     for (let i = 1; i < arguments.length; i++) {
//       skills.push(arguments[i]);
//     }
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

//   let maria = getDevObject('Maria', 'HTML', 'CSS', 'JavaScript', 'jQuery', 'React');

//   function getDevObject(name, ...skills) {
//     return {
//       devName: name,
//       jobSkills: skills
//     };
//   }

//   console.log(maria);

// var a = ["red", "green", "blue"];

// a.forEach((color) => {
//   console.log(`I LOVE ${color}`);
// });

let x = 5;

{
  console.log(x);
  let x = 6;
}
