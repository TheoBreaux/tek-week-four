const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// Every

// 1 Determine if every number is greater than or equal to 0.
const greaterThanorEqualTo = nums.every((number) => number >= 0);

// console.log(greaterThanorEqualTo);

// 2 Determine if every word shorter than 8 characters.
const shorterThan8 = panagram.every((word) => word.length > 8);

// console.log(shorterThan8);

// Filter

// 1 filter the array for numbers less than 4.
const lessThanFour = nums.filter((number) => number < 4);
// console.log(lessThanFour);

// 2 Filter words that have an even length.
const evenLength = panagram.filter((word) => {
  return word.length % 2 === 0;
});

// console.log(evenLength);

// Find Index

// 1 Find the index of the first number that is divisible by 3.
const divisibleByThree = nums.findIndex((number) => {
  return number % 3 === 0;
});

// console.log(divisibleByThree);

// 2 Find the index of the first word that is less than 2 characters long.
const lessThanTwoChar = panagram.findIndex((word) => {
  return word.length < 2;
});

// console.log(lessThanTwoChar);

// For Each

//  1 Log each value of the array multiplied by 3
const multipliedByThree = nums.forEach((number) => console.log(number * 3));
// console.log(multipliedByThree);

//  2 Log each word with an exclamation point at the end of it.
const exclamation = panagram.forEach((word) => console.log(`${word}!`));

// console.log(exclamation);

// Map

// 1 Make a new array of each number multiplied by 100.
const multipliedBy100 = nums.map((number) => number * 100);
// console.log(multipliedBy100)

// 2 Make a new array of all of the words in all uppercase.
const allUppercase = panagram.map((word) => word.toUpperCase());
// console.log(allUppercase);

// Some

//  1 Find out if some numbers are divisible by 7.
const divisibleBy7 = nums.some((number) => {
  return number % 7 === 0;
});

// console.log(divisibleBy7);

//  2 Find out if some words have the letter a in them.
const haveA = panagram.some((word) => word.includes("a"));

// console.log(haveA);

// Reduce

// 1 Add all of the numbers in the array together using the reduce method.

const sumNumbers = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// console.log(sumNumbers);

// 2 Concatenate all the words using reduce.
const concatenatedWords = panagram.reduce(
  (accumulator, currentValue) => (accumulator += currentValue),
  ""
);

// console.log(concatenatedWords);

// Sort

// 1 Sort the numbers in ascending order.
nums.sort();
// console.log(nums);

// 2 Sort the numbers in descending order.
// console.log(nums.sort((a, b) => b - a));

// 3 Sort the words in ascending order.
panagram.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
// console.log(panagram);

// 4 Sort the words in descending order.
panagram.sort((a, b) => b.toLowerCase().localeCompare(a.toLowerCase()));
// console.log(panagram)

// isPanagram Using the following array, test whether each letter a-z (case insensitive) is used at least once.

const letterSet = new Set();

panagram.forEach((word) => {
  // Convert the word to lowercase and split it into individual characters
  const characters = word.toLowerCase().split("");

  // Add each character to the letterSet
  characters.forEach((character) => {
    letterSet.add(character);
  });
});

const hasAllLetters =
  [...letterSet].sort().join("") === "abcdefghijklmnopqrstuvwxyz";

// console.log(hasAllLetters);

// Working with data

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];

// 1 Filter for products with a price that is less than 10.

const productsLessThanTen = products.filter((product) => {
  return product.price < 10;
});

console.log(productsLessThanTen);

// 2 Sort alphabetically by product name.

products.sort((a, b) => a.name.localeCompare(b.name));
console.log(products);
