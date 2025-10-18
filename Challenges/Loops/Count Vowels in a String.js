// Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (const char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Niranjan"));
console.log(countVowels("NIRANJAN"));
