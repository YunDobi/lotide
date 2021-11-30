const eqArrays = require("./eqArrays")

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    return(`✅✅✅ Assertion Passed: [${firstArray}] === [${secondArray}]`);
  } else {
    return(`🛑🛑🛑 Assertion Failed: [${firstArray}] !== [${secondArray}]`);
  }
};
module.exports = assertArraysEqual;