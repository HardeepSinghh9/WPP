// Write a JavaScript program to count the number of vowels in a given string.
function vowel(str) {
  return str.replace(/[^aeiou]/g, "").length;
}

console.log(vowel("qzwxecdfvgbnum"));
console.log(vowel("asdfghjklqwertyuiopzxcvbnm"));
