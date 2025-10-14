// Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.
function isItTruthy(input) {
  const bool = Boolean(input);
  return bool ? "It's truthy!" : "It's falsey!";
}

console.log(isItTruthy(0));
console.log(isItTruthy(1));
console.log(isItTruthy(NaN));
console.log(isItTruthy([]));
