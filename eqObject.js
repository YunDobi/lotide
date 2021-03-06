const eqArrays = require("./eqArrays");

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
      if (typeof(longerArray[longkey]) === 'object') {
        eqObjects(longerArray[longkey], shortArray[shortkey]);
      }

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

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) 
eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false