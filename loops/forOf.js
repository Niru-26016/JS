// Use a for-of loop to iterate through th array [1,2,3,4,5] and stop when the number '4' is found
// store the number before '4' in an array named smallNumbers
let numbers = [1, 2, 3, 4, 5];
smallNumbers = [];
for (const num of numbers) {
    if(num === 4){
        break;
    }
  smallNumbers.push(num);
}
console.log(smallNumbers);
