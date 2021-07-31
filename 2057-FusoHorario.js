var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let sum = 0
lines[0].split(' ').map(Number).forEach(function(value,key) {
    sum+=value
})
while(sum > 24) {
    sum-=24
}

if(sum == 24) sum = 0

if(sum < 0) sum+=24
console.log(sum)

process.exit(0)