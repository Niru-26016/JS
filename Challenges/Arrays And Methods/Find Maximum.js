// Write a function findMax(arr) that returns the largest number in the array

function findMax(arr) {
  let max=0;
  arr.forEach(element => {
    if(element>max){
        max=element;
    }
  });
  return max;
}

console.log(findMax([1, 2, 3, 4, 5]));
