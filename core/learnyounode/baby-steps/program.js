var sum = 0

process.argv.forEach(function (currentValue, index) {
  if (index > 1) {
    sum += Number(currentValue)
  }
})

console.log(sum)