function getShortMessages(messages) {
  // SOLUTION GOES HERE
  // console.log(messages)
  var lengths = messages.map(function (message) {
    console.log(message.message)
    //console.log((message.message.length < 50) ? 1 : 0)
    return (message.message.length < 50) ? true : false
  })
  console.log(lengths)

  //   .filter(function (message) {
  //   if (message) return message
  // })
}
module.exports = getShortMessages