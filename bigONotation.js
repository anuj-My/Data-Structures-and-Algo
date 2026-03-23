// ? Write a function that accepts a string input and returns a reversed copy

function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverseString2(str) {
  let reveredStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reveredStr += str[i];
  }
  return reveredStr;
}

console.log(reverseString("hey"), reverseString("peter"));
console.log(reverseString2("hey"), reverseString2("peter"));

// sum of n numbers
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpTo(5)); // time complexity o(n)

function addUpTo(n) {
  let total = (n * (n + 1)) / 2;

  return total;
}
console.log(addUpTo(6)); // time complexity o(1)

// ! The Problem With Time

// --> different machines will recond different times
// --> The same machine will record different times!
// --> For fast algorithms, speed measurements may not be precise enough?

// ! If not time, then what?

// --> Rather than counting seconds, which are so variable..
// --> Lets count the number of simple operations the comupter has to perform!

// ! 🔍 What is Big O Notation?
// --> Big O notation is a way to describe how the runtime or space usage of an algorithm grows as the input size increases.

// --> It tells you how fast your algorithm gets slower as the input gets bigger — without worrying about exact numbers or constants.

// ! ⏱ Common Growth Rates (explained simply)

// O(1): Constant time
// Takes the same time no matter the input size. Like accessing an element in an array by index.

// O(log n): Logarithmic time
// Super efficient. Every step cuts the problem in half. Example: binary search.

// O(n): Linear time
// Time grows directly with input. If the list doubles, the time doubles. A simple loop through a list.

// O(n log n): Slightly more than linear
// Shows up in efficient sorting algorithms like merge sort.

// O(n²): Quadratic time
// Gets slow quickly. Happens with nested loops — like comparing every pair in a list.

// ? print all pairs
function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
printAllPairs(5); // O(n²): Quadratic time

// O(2ⁿ) or O(n!): Exponential time
// Extremely slow. These show up in brute-force algorithms or recursion-heavy problems (like solving puzzles or traveling salesman).

// ! 🔧 Big O Ignores Details
// Big O focuses on the big picture. So it doesn’t care about:

// Exact time or number of steps

// Constants (O(2n) is still O(n))

// Lower-order terms (O(n² + n) is still O(n²))

// ! Big O Shorthands
// Arthimetic operations are constant
// variable assignment is constant
// accessing elements in an array (by index) or object (by key) is constant
// In a loop, the complexity is the lenght of the loop times the complexity of whatever inside of the loop

// ! Space Complexity in JS

// rule of thumb

// Most primites (boolean, numbers, undefined, null) are constant space.
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for Objects)

//!  Big O of Objects
// ** Insertion - O(1)
// ** Removal - O(1)
// ** Searching - O(N)
// ** Access - O(1)

//--> When you don't need any ordering objects are an excellent choice!

// ! Big O of Object Methods
// ** Object.keys - O(N)
// ** Object.values - O(N)
// ** Object.entries - O(N)
// ** hasOwnProperty - O(1)

// ! Big O of Array Methods
