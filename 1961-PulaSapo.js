var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const PuloECano = lines.shift().split(' ').map(Number)
const alturaCanos = lines.shift().split(' ').map(Number)

let value = 0
var win = true
for(var i = 1; i < alturaCanos.length; i++) {
    if(alturaCanos[i] < alturaCanos[i-1]) value = alturaCanos[i-1] - alturaCanos[i]
    else value = alturaCanos[i] - alturaCanos[i-1]


    if(!(value <= PuloECano[0])){
        win=false
    }  
} 
if(win) console.log('YOU WIN')
else console.log('GAME OVER')
process.exit(0)