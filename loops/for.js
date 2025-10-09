//1. Write a for loop that multiplied each element in an array "[2,4,6]" by 2 and store the result in a new array

let multipliedNumber = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  multipliedNumber.push(numbers[i] * 2);
}
console.log(multipliedNumber);

