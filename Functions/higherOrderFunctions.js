// higher Order Function 
// Passing function as parameter for another function 

function multiply(listOfNum, num) {
  newList = [];
  for (let i = 0; i < listOfNum.length; i++) {
    newList.push(listOfNum[i] * num);
  }
  return newList;
}

function multiplayAndSum(multiply, list, num) {
  sum = 0;
  multiplyedList = multiply(list, num);
  multiplyedList.forEach((Element) => {
    sum += Element;
  });
  return sum;
}

console.log(multiplayAndSum(multiply, [2, 3, 4, 5], 10));
