module.exports = function (n) {
  // assert type
  n = Number(n)
  // check if number is zero
  if (n === 0) return (n + '')
  // if it's less than a thousand
  if (n < 1000) return n

  function calc(to) {
    return ((n / to) + '').split(/\./)[0]
  }

  var abs = Math.abs(n)

  if (abs >= Math.pow(10, 12))
    return calc(Math.pow(10, 12)) + 't'

  if (abs < Math.pow(10, 12) && abs >= Math.pow(10, 9))
    return calc(Math.pow(10, 9)) + 'b'

  if (abs < Math.pow(10, 9) && abs >= Math.pow(10, 6))
    return calc(Math.pow(10, 6)) + 'm'

  if (abs < Math.pow(10, 6) && abs >= Math.pow(10, 3))
    return calc(Math.pow(10, 3)) + 'k'
}