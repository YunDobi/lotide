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
