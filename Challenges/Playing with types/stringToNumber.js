//Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".
function stringToNumber(str) {
  const num = Number(str);
  return isNaN(num) ? "Not a number" : num;
}

console.log(stringToNumber("10"));
console.log(stringToNumber("Ten"));
