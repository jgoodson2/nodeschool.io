var fs = require('fs')

fs.readdir(process.argv[2], function (err, list) {
  var pattern = process.argv[3].trim()
  //console.log('pattern = ' + pattern)
  if (err) return console.error(err)
  list.forEach(function (item) {
    // console.log(item + ' ' + item.trim().indexOf(pattern))
    if (item.trim().indexOf(pattern) >= 0) {
      console.log(item)
    }
  })
})
