function reduce(arr, fn, initial) {
  if (!arr.length) return initial

  var curr = arr[0]
  var remaining = arr.slice(1)
  return reduce(remaining, fn, fn(initial, curr))
}

module.exports = reduce

/*
 //cat /Users/jgoodson2/.nvm/versions/node/v7.9.0/lib/node_modules/functional-javascript-workshop/exercises/basic_recursion/exercise.js
 "use strict"

 var loremIpsum = require('lorem-ipsum')
 var runner = require('../runner')

 var input = loremIpsum({count: 1, units:'paragraphs'})
 .replace(/([^\w ])/g, '')// remove non-words and spaces
 .toLowerCase() // lowercase I guess
 .split(' ') // create array of words

 module.exports = runner.custom(function(fx, input) {
 return fx(input, function(prev, curr) {
 prev[curr] = ++prev[curr] || 1
 return prev
 }, {})
 })(input)

 */
