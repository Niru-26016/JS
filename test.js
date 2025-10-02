let topCrypto = ["BTC", "ETH", "BNB"];
let memeCrypto = ["DOGE", "PEPE", "TRUMP"];
let popularCrypto = [...topCrypto,...memeCrypto];
// crypto.push("DOGE")
// let softCopyCrypto =topCrypto
// let hardCopyCrypto =[...topCrypto]
// topCrypto.pop();
// console.log(topCrypto);
// console.log(softCopyCrypto);
// console.log(hardCopyCrypto);
let isBnbInTopCrypto=topCrypto.includes("BNB")
console.log(popularCrypto);
console.log(isBnbInTopCrypto);


