const assertEqual = require("./assertEqual")

const eqArrays = require("./eqArrays")

const assertArraysEqual = require("./assertArraysEqual")

const middle = function(given) {
  const middleIndex = Math.floor(given.length / 2);
  let out = [];
  if (1 === given.length % 2) {
    out.push(given[middleIndex]);
    return out;
  } else if (0 === given.length % 2) {
    out.push(given[middleIndex - 1], given[middleIndex],);
    return out;
  }
};
module.exports = middle;