// Write a function which takes in a string and returns counts of each character in the string

function charCount(str) {
  if (!str) return;
  let obj = {};

  //   for (let i = 0; i < str.length; i++) {
  //     let item = str[i];
  //     if (/[a-zA-Z0-9]/.test(item)) {
  //       if (obj[item]) {
  //         obj[item] = obj[item] + 1;
  //       } else {
  //         obj[item] = 1;
  //       }
  //     }
  //   }

  for (let char of str) {
    if (/[a-zA-Z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

console.log(charCount("aaaaA"));
console.log(charCount("hello"));
console.log(charCount(""));
console.log(charCount("my phone number is 15783!"));
