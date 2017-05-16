function countWords(inputWords) {
  // console.log(inputWords)
  return inputWords.reduce(function (allWords, word) {
    if (word in allWords) {
      allWords[word]++
    }
    else {
      allWords[word] = 1
    }
    return allWords
  }, {})
}

module.exports = countWords

/*
 function countWords(arr) {
   return arr.reduce(function(countMap, word) {
   countMap[word] = ++countMap[word] || 1 // increment or initialize to 1
   return countMap
   }, {}) // second argument to reduce initialises countMap to {}
 }

 module.exports = countWords
 */