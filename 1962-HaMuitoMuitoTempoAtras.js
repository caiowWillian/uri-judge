var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')
const repeat = lines.shift()

let numero = 0
let resultado = 0
for(var i = 0; i < repeat; i++) {
    numero = parseInt(lines.shift())
    resultado = numero - 2015
    if(resultado > 0) console.log(`${resultado+1} A.C.`)
    else if(resultado < 0) console.log(`${-resultado} D.C.`)
    else console.log('1 A.C.')
}

process.exit(0)