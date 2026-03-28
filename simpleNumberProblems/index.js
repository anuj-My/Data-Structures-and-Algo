const { reverse } = require("dns");

function printNumbers(n) {
  let numbers = "";
  for (let i = 1; i <= n; i++) {
    numbers = numbers + " " + i;
  }
  console.log(numbers);
}

// printNumbers(5);

function printNumNTo1(n) {
  let numbers = "";
  //   using reverse loop
  //   for (let i = n; i >= 1; i--) {
  //     numbers = numbers + " " + i;
  //   }

  //   using method
  //   for (let i = 1; i <= n; i++) {
  //     numbers = numbers + i;
  //   }
  //   console.log(numbers.split("").reverse().join(" "));

  for (let i = 1; i <= n; i++) {
    console.log(n - i + 1);
  }
}

// printNumNTo1(5);

function printEvenNumbers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// printEvenNumbers(10);

function sumOfN(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);

  //   another way
  console.log((n * (n + 1)) / 2);
}

// sumOfN(5);

function factorial(n) {
  let result = 1;
  for (let i = n; i > 1; i--) {
    result *= i;
  }
  console.log(result);
}

// factorial(5);

function sumOfEvenNumbers(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
      result += i;
    }
  }
  console.log(result);
}

// sumOfEvenNumbers(10);

function SquareOfNumbers(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i ** 2);
  }
}

// SquareOfNumbers(5);

function divisbleBy3And5(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}
// divisbleBy3And5(30);

function sumOddNumbers(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      result += i;
    }
  }
  console.log(result);
}
// sumOddNumbers(10);

function cubes(n) {
  for (let i = 1; i <= n; i++) {
    console.log(i ** 3);
  }
}
// cubes(5);

function evenAndSquare(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
      console.log(i);
    }
  }
}

evenAndSquare(20);
