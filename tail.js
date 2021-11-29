const assertEqual = require("./assertEqual");

const tail = function(givenArray) {
  if (givenArray.length <= 0) {
    return undefined;
  }
  return givenArray.slice(1);
  
};
module.exports = tail