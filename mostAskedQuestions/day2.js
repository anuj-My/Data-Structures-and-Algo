// 5. How do you find the maximum sum subarray (Kadane’s algorithm)?
// ? “Find the maximum sum of any continuous subarray inside the array.”

const maxSumSubarray = (arr) => {
  let max = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (currentSum + item > item) {
      currentSum += item;
    } else {
      currentSum = item;
    }
    if (currentSum > max) {
      max = currentSum;
    }
  }

  return max;
};

console.log(maxSumSubarray([4, -1, 2, 1]));
console.log(maxSumSubarray([-3, -2, -5]));

// 6. Write a function called same, which accepts two arrays. the function should return true if every value in the array has its corresponding value squared in the second array. The frequency of Values must be the same.

// first solution: O(N^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    const correctIndex = arr2.indexOf(item ** 2);
    if (correctIndex === -1) return false;

    arr2.splice(correctIndex, 1);
  }

  return true;
};

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

// second solution: O(N)
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (const item of arr1) {
    if (!obj1[item]) {
      obj1[item] = 1;
    } else {
      obj1[item] = obj1[item] + 1;
    }
  }

  for (const item of arr2) {
    obj2[item] = (obj2[item] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key ** 2]) return false;
    if (!obj2[key ** 2]) return false;
  }
  return true;
};

console.log(same2([1, 2, 3], [4, 1, 9])); // true
console.log(same2([1, 2, 3], [1, 9])); // false
console.log(same2([1, 2, 1], [4, 4, 1])); // false

// ? Frequency Counter - validAnagram
// 7. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const obj1 = {};
  const obj2 = {};

  for (const item of str1) {
    obj1[item] = (obj1[item] || 0) + 1;
  }

  for (const item of str2) {
    obj2[item] = (obj2[item] || 0) + 1;
  }

  for (const key in obj1) {
    if (!obj2[key]) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};
console.log("anagram-----");
console.log(anagram("iceman", "cinema"));
console.log(anagram("iceman", "cinem"));
console.log(anagram("elven", "leevn"));

// write a function called twoSum that accepts a sorted array of integers and a target integer. find first pair where sum is equal to target.

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
};

console.log(twoSum([-4, -3, 0, 1, 2, 3, 5], 0));
console.log(twoSum([-4, -3, 0, 1, 2, 3, 5], 2));
console.log(twoSum([-4, -3, 0, 1, 2, 3, 5], 8));
console.log(twoSum([-4, -3, 0, 1, 2, 3, 5], 9));
