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