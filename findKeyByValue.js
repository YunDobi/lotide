const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const findKeyByValue = function(allItems,target) {
  let keys = Object.keys(allItems);
  for (const key of keys) {
    if (allItems[key] === target) {
      return key;
    }
  }
};

