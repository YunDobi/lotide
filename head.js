const assertEqual = require('./assertEqual')
// TEST CODE

const head = function(givenArray) {
  if (givenArray.length <= 0) {
    return undefined;
  }
  return givenArray[0];
  
};

module.exports = head