function replaceDivisible(x, y) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] % y === 0) {
      x[i] = "isDivisible";
    }
  }
  return x;
}
console.log(replaceDivisible([2, 4, 3, 6, 5], 3));
module.exports = replaceDivisible;
