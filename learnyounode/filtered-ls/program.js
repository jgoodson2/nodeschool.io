var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
  var pattern = process.argv[3].trim()
  if (err) return console.error(err)
  list.forEach(function (item) {
    if (path.extname(item) == '.' + pattern) console.log(item)
  })
})
