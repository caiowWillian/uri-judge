var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const tuite = lines[0]

if(tuite.length <= 140) console.log('TWEET')
else console.log('MUTE')

process.exit(0)