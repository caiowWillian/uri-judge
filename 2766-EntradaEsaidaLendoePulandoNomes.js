var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

console.log(lines[2])
console.log(lines[6])
console.log(lines[8])

process.exit(0)