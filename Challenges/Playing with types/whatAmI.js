// Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"
function whatAmI(input) {
  const num = Number(input);
  return isNaN(num) ? "I'm a string!" : "I'm a number!";
}

console.log(whatAmI("10"));
console.log(whatAmI("Ten"));
console.log(whatAmI(10));
