function doubleAll(numbers) {
  console.log(numbers)
  var doubles = numbers.map(function (num) {
    return 2 * num
  })
  return doubles
}

module.exports = doubleAll