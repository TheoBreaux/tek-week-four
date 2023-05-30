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

console.log(concatenatedWords);
