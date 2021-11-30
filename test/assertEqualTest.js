// assertEqual.js
const assert = require("chai").assert;
const assertEqual = require('../assertEqual');

describe("assertEqual", () => {
  it ("Assertion passed for 4, 4." , () => {
    assert.equal(assertEqual(4,4),"✅✅✅ Assertion Passed: [4] === [4]")
  })
})