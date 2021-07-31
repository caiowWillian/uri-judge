var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let numbers = lines[0].split(' ')

numbers[0] = parseInt(numbers[0])
numbers[1] = parseInt(numbers[1])

console.log((numbers[0] / numbers[1]).toFixed(2))

process.exit(0)