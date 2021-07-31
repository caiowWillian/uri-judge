//var input = require('fs').readFileSync('/dev/stdin', 'utf8')
//var lines = input.split('\n')


var lines = [
    '-0.000027'
]

const number = parseFloat(lines[0])

console.log(number.toExponential(4))

process.exit(0)