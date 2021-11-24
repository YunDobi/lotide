const flatten = function (source) {
  for (let i = 0; i < source.length; i++) {
    // console.log(source[i])
    if (Array.isArray(source[i])) {
      for (let j = 0; j < source[i].length; j++) {
        source.push(source[i][j]);
      }
      source.splice(i,1);
    }
    source.sort();
  }
  console.log(source);
};



flatten([1, 2, [3, 4], 5, [6]]);