// Write a function filterNumbers(arr) that returns only numbers from a mixed array

function filterNumbers(arr) {
  let numArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numArr.push(arr[i]);
    }
  }
  return numArr;
}
console.log(filterNumbers([1, 2, 3, "ten", true, "hello"]));
