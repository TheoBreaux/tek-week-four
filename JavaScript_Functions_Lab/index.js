// 1 (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if...else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(num1, num2) {
  if (num1 === num2) {
    return num1;
  } else if (num1 > num2) {
    return num1;
  }
  return num2;
}

// console.log(maxOfTwoNumbers(7,1));

// 2 Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThreeNumbers = function (num1, num2, num3) {
  let max = num1;
  for (let i = 0; i < arguments.length; i++) {
    if (num2 > max) {
      max = num2;
    } else if (num3 > max) {
      max = num3;
    }
  }
  return max;
};

// console.log(maxOfThreeNumbers(1, 27, 89));

// 3 Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(character) {
  character = character.toLowerCase();
  if (
    character === "a" ||
    character === "e" ||
    character === "i" ||
    character === "o" ||
    character === "u"
  ) {
    return true;
  }
  return false;
}

// console.log(isCharAVowel('T'));

// 4 Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.

const sumArray = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// console.log(sumArray([7, 8, 7]));

// 5 Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

function multiplyArray(array) {
  let product = 1;
  array.forEach((num) => {
    product *= num;
  });
  return product;
}

// console.log(multiplyArray([2, 3, 2]));

// 6 Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = function (...args) {
  return args.length;
};

// console.log(numArgs(5, 76, 6, 4, 2, 11));

// 7 Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".

function reverseString(string) {
  let reversedString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return reversedString;
}

// console.log(reverseString("rockstar"));

// 8 Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = function (array) {
  let longestString = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i].length > longestString.length) {
      longestString = array[i];
    }
  }
  return longestString;
};

// console.log(longestStringInArray(["hi", "hello", "goodbye", "sacrifice"]));

// 9 Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

function stringsLongerThan(array, number) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > number) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));

// 10 Define a function, as a function expression, addList that accepts any quantity of numbers as arguments, adds them together, and returns the resulting sum. Assume all parameters will be numbers. If called with no arguments, return 0 (zero).

const addList = function (...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[1];
  }
  return sum;
};

// console.log(addList(10, 10, 10, 10, 10));
