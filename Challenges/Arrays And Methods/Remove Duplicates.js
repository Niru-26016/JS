//Write a function removeDuplicates(arr) that returns a new array with all duplicates removed
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 5]));
