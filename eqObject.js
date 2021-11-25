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
        console.log(false);
        return false;
      } else if (longkey === shortkey) { //valuse are diffrent
        if (Array.isArray(longValue) || Array.isArray(shortValue)) {
          if (eqArrays(longValue,shortValue) === false) {
            console.log(false);
            return false;
          }
        } else if (longValue !== shortValue) {
          console.log(false);
          return false;
        }
      }
    }
  }
  console.log(true);
  return true;
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false