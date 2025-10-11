/* 1. Write a function names palyGame that takes one parameter, 'gameName' and return a string like 'palying GTA '*/
function palyGame(gameName) {
  return `playing ${gameName}`;
}
console.log(palyGame("FC 25"));

/*2. Create a function named 'orderFood' that takes one parameter 'foodType'. inside this function ,create another function named 'confirmOrder'  that returns a message like 'order confirmed for Dosa'   
call 'confirmOrder' from within 'order' and return the result*/

function orderFood(foodType) {
  function confirmOrder() {
    return `order confirmed for ${foodType}`;
  }
  return confirmOrder();
}
console.log(orderFood("idly"));

//2. Q1 using arrow function

playGame = (gameName) => {
  return `playing ${gameName}`;
};
console.log(playGame("WWE 2k25"));

// used when only one line in the function
foodOrder = (food) => `making ${food}`;
console.log(foodOrder("Biriyani"));
