// Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.
function flipBoolean(input) {
  const bool = Boolean(input);
  return !bool;
}

console.log(flipBoolean(false));
console.log(flipBoolean(true));
console.log(flipBoolean(0));
console.log(flipBoolean(1));
