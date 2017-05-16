function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.map(function (message) {
    return message.message
  }).filter(function (elem) {
    return elem.length < 50
  })
}
module.exports = getShortMessages