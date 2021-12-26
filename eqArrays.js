const eqArrays = function (first,second) {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i].length !== second[i].length) {
      return false;
    }
    if (Array.isArray(first[i])) {
      eqArrays(first[i],second[i]);
    } else if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));// => true);
// console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
// console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false

module.exports = eqArrays;