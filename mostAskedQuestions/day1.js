// 1. How do you reverse a string in JavaScript?
const reverseString = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
};

console.log(reverseString("hello"));
console.log(reverseString("nitin"));

// 2. How do you check if a string is a palindrome?
const isPalindrome = (str) => {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr === str;
};

console.log(isPalindrome("peter"));
console.log(isPalindrome("nitin"));

// 3. How do you find the first non-repeating character in a string?
// ? "Find the first letter in the string that does NOT repeat, and return that letter."

const findFirstUniqueChar = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] += 1;
    }
  }

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (obj[char] === 1) {
      return char;
    }
  }

  return -1;
};

console.log(findFirstUniqueChar("nitin"));
console.log(findFirstUniqueChar("new"));

// second solution
const findFirstUniqueChar2 = (str) => {
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (str.indexOf(char) === str.lastIndexOf(char)) {
      return char;
    }
  }

  return -1;
};

console.log(findFirstUniqueChar2("nitin"));

// third solution using map
const findFirstUniqueChar3 = (str) => {
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }

  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i]) === 1) {
      return str[i];
    }
  }

  return -1;
};

console.log(findFirstUniqueChar3("abaabc"));
console.log(findFirstUniqueChar3("nitin"));

// 4. How do you remove duplicates from an array?
// solution 1: O(N)
const removeDuplicates = (arr) => {
  const uniqueArr = new Set(arr);
  return [...uniqueArr];
};

console.log(removeDuplicates([2, 1, 6, 8, 9, 1, 2, 1, 6]));
console.log(removeDuplicates([2, 1, 6, 8, 9, 1, 12, 41, 6]));

// solution 2: O(n^2)
const removeDuplicates2 = (arr) => {
  const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
  return uniqueArr;
};

console.log(removeDuplicates2([2, 1, 6, 8, 9, 1, 2, 1, 6]));
console.log(removeDuplicates2([2, 1, 6, 8, 9, 1, 12, 41, 6]));

// solution 3: O(n)
const removeDuplicates3 = (arr) => {
  const map = new Map();
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
      unique.push(arr[i]);
    }
  }

  return unique;
};
console.log("--- using frequency---");
console.log(removeDuplicates3([2, 1, 6, 8, 9, 1, 2, 1, 6]));
console.log(removeDuplicates3([2, 1, 6, 8, 9, 1, 12, 41, 6]));
