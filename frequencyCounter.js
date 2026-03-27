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
