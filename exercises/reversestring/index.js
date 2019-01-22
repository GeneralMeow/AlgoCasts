// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var newStr = str.split("");
    var results = '';
    for (var i = newStr.length - 1; i >= 0; i--) {
      results += newStr[i];
    }
    return results;
}

module.exports = reverse;
