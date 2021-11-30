const eqArrays = require("./eqArrays")

const assertArraysEqual = require("./assertArraysEqual")


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (Object.keys(results).includes(sentence[i])) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [i];
    }
  }
  console.log(results);
  return results;
};
//letterPositions("lighthouse in the house");
