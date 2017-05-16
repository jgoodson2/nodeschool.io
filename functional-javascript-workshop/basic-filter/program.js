function getShortMessages(messages) {
  // SOLUTION GOES HERE
  return messages.map(function (message) {
    return message.message
  }).filter(function (elem) {
    return elem.length < 50
  })
}
module.exports = getShortMessages

/*
 Here's the official solution in case you want to compare notes:

 ────────────────────────────────────────────────────────────────────────────────
 module.exports = function getShortMessages(messages) {
 return messages.filter(function(item) {
 return item.message.length < 50
 }).map(function(item) {
 return item.message
 })
 }
 */