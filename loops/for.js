//1. Write a for loop that multiplied each element in an array "[2,4,6]" by 2 and store the result in a new array

let multipliedNumber = [];
let numbers = [2, 4, 6];

for (let i = 0; i < numbers.length; i++) {
  multipliedNumber.push(numbers[i] * 2);
}
console.log(multipliedNumber);

//2. write a for loop that loops through the array "["GTA V","COD","RDR","GTA VI","PUBG","FIFA"]" and stops the loop when it finds "GTA VI" .
// stores all games before "GTA VI" in s new array

let games = ["GTA V", "COD", "RDR", "GTA VI", "PUBG", "FIFA"];
let gameCollection = [];
for (let j = 0; j < games.length; j++) {
  if (games[j] === "GTA VI") {
    break;
  }
  gameCollection.push(games[j]);
}
console.log(gameCollection);


//3. write a for loop that loops through the array "["GTA V","COD","RDR","GTA VI","PUBG","FIFA"]" and skipes "GTA VI" .
// stores the other games in playedGames

// let games = ["GTA V", "COD", "RDR", "GTA VI", "PUBG", "FIFA"];
let playedGames = [];
for (let i = 0; i < games.length; i++) {
  if (games[i] === "GTA VI") {
    continue;
  }
  playedGames.push(games[i]);
}
console.log(playedGames);
