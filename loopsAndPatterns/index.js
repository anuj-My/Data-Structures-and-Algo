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
