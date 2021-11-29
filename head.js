const assertEqual = require('./assertEqual')
// TEST CODE

const head = function(givenArray) {
  if (givenArray.length <= 0) {
    return undefined;
  }
  return givenArray[0];
  
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

module.exports = head