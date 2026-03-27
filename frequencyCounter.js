// ? frequency Counters
// this pattern uses objects or sets to collect values/frequecies of values

// this can often avoid the need for nested loops or O(N^2) operations

// ** Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// ? solution --> 1  Time - O(N**2)
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    let correctIndex = arr2.indexOf(item ** 2);

    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1); // remove matched value
  }

  return true;
}

// ? solution --> 2 Time - O(N)
// function same1(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   let obj1 = {};
//   let obj2 = {};

//   for (let i = 0; i < arr1.length; i++) {
//     const item = arr1[i];
//     if (obj1[item]) {
//       obj1[item] += 1;
//     } else {
//       obj1[item] = 1;
//     }
//   }

//   for (let j = 0; j < arr1.length; j++) {
//     const item = arr2[j];
//     if (obj2[item]) {
//       obj2[item] += 1;
//     } else {
//       obj2[item] = 1;
//     }
//   }

//   for (let key in obj1) {
//     const squaredKey = key ** 2;
//     if (!(squaredKey in obj2)) return false;
//     if (obj2[squaredKey] !== obj1[key]) return false;
//   }

//   return true;
// }

console.log(same1([1, 2, 3], [4, 1, 9])); // true
console.log(same1([1, 2, 3], [1, 9])); // false
console.log(same1([1, 2, 1], [4, 4, 1])); // false

// ? Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
console.log("------anagram-------");
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let result = {};

  for (let i = 0; i < str1.length; i++) {
    if (result[str1[i]]) {
      result[str1[i]] += 1;
    } else {
      result[str1[i]] = 1;
    }
  }

  for (const str of str2) {
    if (!result[str]) return false;
    result[str] -= 1;
  }

  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
