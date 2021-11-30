const assert = require("chai").assert
const tail = require("../tail")

describe("#tail", () => {
  it ("return tail values from [1,3,4,5] which is [3,4,5]", () => {
    assert.deepEqual(tail([1,3,4,5]), [3,4,5]); 
  })
})