function isDivisbleByN(arr, n) {
  let newArr = [];
  for (const i of arr) {
    if (i % n === 0) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(isDivisbleByN([1, 3, 5, 6, 3, 6, 7, 4], 2));

module.exports = isDivisbleByN;
