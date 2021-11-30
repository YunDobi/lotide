const assert = require("chai").assert
const assertEqual = require("../assertEqual")
const eqArrays= require("../eqArrays")

describe("eqArray", () => {
  it ("Assertion Paased for ([1,2] , [1,2])", () => {
    assert.equal(assertEqual(eqArrays([1,2],[1,2]), true),"✅✅✅ Assertion Passed: [true] === [true]")
  })
})