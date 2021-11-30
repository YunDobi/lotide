const assert = require("chai").assert
const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual")

describe ("#middle", () => {
  it ("return the middle number which is 2", () => {
    assert.deepEqual((assertArraysEqual(middle([1,2,3]), [2])),"✅✅✅ Assertion Passed: [2] === [2]")
  })
})