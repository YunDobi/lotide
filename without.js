const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(first,second) {
  let longerArray = first.length;
  if (longerArray < second.length) {
    longerArray = second.length;
  }

  for (let i = 0; i < longerArray; i++) {
    if (first[i] !== second[i]) {
      console.log(false);
      return false;
    } else if (i === longerArray - 1 && first[i] === second[i]) {
      console.log(true);
      return true;
    }
  }
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: [${firstArray}] === [${secondArray}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${firstArray}] !== [${secondArray}]`);
  }
};

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



