/*1. Write a do while loop that prompts a user to enter their favorate game type until the enter "stop"
 Store each collection in an array named "gameCollection".*/

//note past in browser console
//prompt will not work in nodeJS
let gameCollection = [];
let game;
do {
  game = prompt(`Enter Your game: `);

  if (game.toUpperCase() != "STOP") {
    gameCollection.push(game);
  }
} while (game.toUpperCase() != "STOP");
console.log(gameCollection);

//2. write a do while loop that adds numbers from 1 to 3 and stores the result in a variable named "totle".

let total=0;
let i=1;
do {
    total+=i;
    i++;
} while (i<=3);
console.log(total);

