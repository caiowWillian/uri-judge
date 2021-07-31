var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let getValue = 0
let values = []
let tentativa = [0,0,0]
let pontos = [0,0,0]
for(var i = 1; i < lines.length; i++) {
    if(getValue == 0) {
        getValue++
        continue
    }

    values = lines[i].split(' ')

    if(getValue == 2) {
        getValue = 0
        for(var y = 0; y < values.length; y++) {
            pontos[y] += parseInt(values[y])
        }
        continue
    }

    
    if(getValue == 1) {
        for(var y = 0; y < values.length; y++) {
            tentativa[y] += parseInt(values[y])
        }
    }
    getValue++

}

console.log(`Pontos de Saque: ${(pontos[0] * 100 / tentativa[0]).toFixed(2)} %.`)
console.log(`Pontos de Bloqueio: ${(pontos[1] * 100 / tentativa[1]).toFixed(2)} %.`)
console.log(`Pontos de Ataque: ${(pontos[2] * 100 / tentativa[2]).toFixed(2)} %.`)


process.exit(0)