function maxOfThere(a, b, c) {
  let max = Infinity;

  if (a >= b && a >= c) {
    max = a;
  } else if (b >= c) {
    max = b;
  } else {
    max = c;
  }

  console.log(max);
}

maxOfThere(4, 5, 12);

function numberType(n) {
  if (n > 0) {
    console.log("Positive");
  } else if (n < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}
numberType(0);
numberType(1);
numberType(-1);

function electicityBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    total = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }

  return total;
}
console.log(electicityBill(230));
console.log(electicityBill(120));

function isVowel(char) {
  if (char === "") return;
  char = char.toLowerCase().trim();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    console.log("vowel");
  } else {
    console.log("constant");
  }
}

isVowel("a");
isVowel("d");
isVowel("e");

function leapYear(year) {
  if (year % 4 === 0 && (year % 4 === 0 || year % 100 === 0)) {
    console.log(true);
  } else {
    console.log(false);
  }
}
leapYear(2024);
leapYear(2026);
leapYear(2028);

function checkCharType(char) {
  const charCode = char.charCodeAt(0);
  console.log(charCode);
  // digit
  if (charCode >= 48 && charCode <= 57) {
    console.log("Digit as Letter");
  }
  // uppercase
  if (charCode >= 65 && charCode <= 90) {
    console.log("Uppercase Letter");
  }
  // Lowercase
  if (charCode >= 97 && charCode <= 122) {
    console.log("Lowercase Letter");
  }
}

checkCharType("A");
checkCharType("a");
checkCharType("1");
checkCharType("@");
