const flatten = function (source) {
  let out = [];
  source.forEach((number) => {
    if (Array.isArray(number)) {
      let temp = flatten(number);
      temp.forEach(function(value) {
        out.push(value);
      });
    } else {
      out.push(number);
    }
  });
  console.log(out);
  return out;
};
flatten([1, 2, [3, 4], 5, [6]]);