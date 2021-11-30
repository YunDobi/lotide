const assertEqual = require("./assertEqual")

const eqArrays = function (first,second) {
  let longerArray = first.length;
  if (longerArray < second.length) {
    longerArray = second.length;
  }

  for (let i = 0; i < longerArray; i++) {
    if (first[i] !== second[i]) {
      return false;
    } else if (i === longerArray - 1 && first[i] === second[i]) {
      return true;
    }
  }
};
module.exports = eqArrays