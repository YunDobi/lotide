const assertEqual = require('./assertEqual');

const findKey = (array, callback) => {
  for (let key in array) {
    if (callback(array[key])) {
      return key;
    }
  }
};

const newFinder= findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)// => "noma"

assertEqual(newFinder, "noma");