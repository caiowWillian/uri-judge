var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let initialInput = lines[0].split(' ')
initialInput[0] = parseInt(initialInput[0])
for (var i = 1; i <= initialInput[1]; i++) {
    if(lines[i] == 'fechou') initialInput[0]++
    else if(lines[i] == 'clicou') initialInput[0]--
}

console.log(initialInput[0])

process.exit(0)