# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @yun_lee/lotide`

**Require it:**

`const _ = require('@yun_lee/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: the first element of the array.
* `tail`: the rest of the elements of the array 
* `middle`: the middle elements in the array
* `eqArry`: compare the two array, and return if the array is equal, or not return false
* `assertArrayEqual`: compare the array and object and return the result.
* `assertEqual`: compare the single elements include string, number, and boolean