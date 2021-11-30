const assertEqual = require("./assertEqual")
const eqArrays = require("./eqArrays")
const assertArraysEqual = require("./assertArraysEqual")

const without = function(source, itemToRemove) {
  let result = [...source];
  for (let i = 0; i < itemToRemove.length; i++) {
    if (result.includes(itemToRemove[i])) {
      for (let j = 0; j < result.length; j++) {
        if (result[j] === itemToRemove[i]) {
          result.splice(j,1);
        }
      }
    }
  }
  return result;
};
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
console.log(words)
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



