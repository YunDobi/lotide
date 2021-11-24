const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function (first,second) {
  //if first array is longer than second.
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      console.log(false);
      return false;
    } else if (i === first.length - 1 && first[i] === second[i]) {
      console.log(true);
      return true;
    }
  }
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS