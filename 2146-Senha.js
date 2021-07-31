var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

for(var i = 0; i < lines.length; i++) {
    let count = parseInt(lines[i])
    console.log(count-1)
}

process.exit(0)