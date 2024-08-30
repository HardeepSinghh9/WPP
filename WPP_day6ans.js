// write a javascript program to check wheather a gicen positive number is a multiple of 3 or 7

function multiple(number) {
  if (number % 3 == 0 || number % 7 == 0) {
    return true;
  }
  return false;
}
console.log(multiple(14));
console.log(multiple(15));
console.log(multiple(16));
console.log(multiple(17));
console.log(multiple(18));
console.log(multiple(21));
