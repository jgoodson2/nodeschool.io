var fs = require('fs')

function returnLineCount(str) {
  console.log(str.split('\n').length - 1)
}

function getContents(callback) {
  fs.readFile(process.argv[2], 'utf8', function (err, data) {
    if (err) return console.error(err)
    callback(data)
  })
}

getContents(returnLineCount)
