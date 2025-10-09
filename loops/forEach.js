//1. write a for each loop that loops through the array "["GTA V","COD","RDR","GTA VI","PUBG","FIFA"]" and stops the loop when it finds "GTA VI" .
// stores all games before "GTA VI" in s new array
let gameCollection = ["GTA V", "COD", "RDR", "GTA VI", "PUBG", "FIFA"];
let playedGames = [];
gameCollection.forEach((game) => {
  if (game == "GTA VI") {
    return;
  }
  playedGames.push(game);
});
console.log(playedGames);
