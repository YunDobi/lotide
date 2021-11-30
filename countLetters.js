const assertEqual = require("./assertEqual")

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