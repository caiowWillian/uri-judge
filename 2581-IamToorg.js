var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let numberToSkip = 0
let count = 0

for(var i = 0; i < lines.length; i++) {
    if(count == numberToSkip) {
        count = 0  
        numberToSkip = parseInt(lines[i])
        continue
    }
    console.log(`I am Toorg!`)
    count++
}

process.exit(0)