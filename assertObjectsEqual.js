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

const eqObjects = function(object1, object2) {
  let longerArray = object1;
  let shortArray = object2;
  if (Object.keys(object1).length < Object.keys(object2).length) {
    longerArray = object2;
    shortArray = object1;
  }

  for (const longkey of Object.keys(longerArray)) {
    for (const shortkey of Object.keys(shortArray)) {
      let longValue = longerArray[longkey];
      let shortValue = shortArray[shortkey];

      if (!Object.keys(longerArray).includes(shortkey)) {//keys are diffrent
        return false;
      } else if (longkey === shortkey) { //valuse are diffrent
        if (Array.isArray(longValue) || Array.isArray(shortValue)) {
          if (eqArrays(longValue,shortValue) === false) {
            return false;
          }
        } else if (longValue !== shortValue) {
          return false;
        }
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line


  if (eqObjects(actual,expected) === true) {
    console.log(`✅✅✅ Assertion Passed: [${inspect(actual)}] === [${inspect(expected)}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${inspect(actual)}] !== [${inspect(expected)}]`);
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true