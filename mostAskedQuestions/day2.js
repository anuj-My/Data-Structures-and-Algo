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
