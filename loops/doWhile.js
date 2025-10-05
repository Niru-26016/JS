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
