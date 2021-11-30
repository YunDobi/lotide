const eqArrays = require("./eqArrays")


const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: [${firstArray}] === [${secondArray}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${firstArray}] !== [${secondArray}]`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);