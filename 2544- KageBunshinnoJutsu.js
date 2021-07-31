var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

for(var i = 0; i < lines.length; i++) {
    if(lines[i] != '')
        console.log(Math.log2(lines[i]))
}

process.exit(0)