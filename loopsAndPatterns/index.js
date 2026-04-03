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

console.log("inverted pyramid star pattern...");

function invertedPyramid(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";

    for (let j = 1; j <= i - 1; j++) {
      str = str + " ";
    }

    for (let j = 1; j <= 2 * (rows - i) + 1; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

invertedPyramid(5);

console.log("Hollow square star pattern...");

function hollowSquareStar(rows) {
  for (let i = 1; i <= rows; i++) {
    let str = "";
    for (let j = 1; j <= rows; j++) {
      if (i === 1 || i === rows || j === 1 || j === rows) {
        str = str + "*";
      } else {
        str = str + " ";
      }
    }
    console.log(str);
  }
}

hollowSquareStar(5);

console.log("hollow pyarmid star pattern");

function hollowPyramidStar(row) {
  for (let i = 1; i <= 2 * row - 1; i += 2) {
    let str = "";
    const currentRow = (i + 1) / 2;

    for (let j = 1; j <= row + currentRow - 1; j++) {
      if (
        j <= row - currentRow ||
        (j > row - currentRow + 1 &&
          j < row + currentRow - 1 &&
          i !== 2 * row - 1)
      ) {
        str += " ";
      } else {
        str += "*";
      }
    }

    console.log(str);
  }
}

hollowPyramidStar(5);
