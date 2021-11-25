const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const countLetters = function (strings) {
  let nospace = strings.split(" ").join("");
  let result = {};
  for (const letter of nospace) {
    if (Object.keys(result).includes(letter)) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(result);
};
countLetters("lighthouse in the house")