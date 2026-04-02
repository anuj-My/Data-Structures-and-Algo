function RightAngleStarPattern(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

RightAngleStarPattern(5);

console.log("reverse Right angle triangle star pattern...");

function reverseRightAngleStar(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";

    for (let j = 1; j <= rows + 1 - i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

reverseRightAngleStar(5);

console.log("pyramid star pattern...");

function pyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";

    for (let j = 1; j <= rows - i; j++) {
      str = str + " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

pyramid(5);
