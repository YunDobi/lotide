const assert = require("chai").assert
const assertArraysEqual = require("../assertArraysEqual")

describe("AssertArraysEqual", () => {
  it ("return Assertion Passed for [1,2,3],[1,2,3]", () => {
    assert.equal(assertArraysEqual([1,2,3],[1,2,3]), "✅✅✅ Assertion Passed: [1,2,3] === [1,2,3]")
  })
})