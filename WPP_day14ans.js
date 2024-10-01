// Write a JavaScript program to extract the first half of a even string?

function half(str) {
  if (str.length % 2 == 0) {
    return str.slice(0, str.length / 2);
  }
  return str;
}
console.log(half("Zxcvbnm"));
console.log(half("QWERTYUIOP"));
console.log(half("ASDFGHJ"));
