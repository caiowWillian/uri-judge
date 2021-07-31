var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

console.log(parseFloat(lines[0]).toString().split('').reverse().join('').replace(/,/g,''))
  
process.exit(0)
