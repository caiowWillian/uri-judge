var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const jogada = lines[0].split(' ')
let vencedor
let resultIsPar = false
if (jogada[3] == 1 & jogada[4] == 1) vencedor = '2'
else if(jogada[3] == 1 && jogada[4] == 0) vencedor = '1'
else {
    if (( parseInt(jogada[1]) + parseInt(jogada[2])) % 2 == 0) resultIsPar = true  
    
    if (jogada[0] == 1 && resultIsPar || jogada[0] == 0 && !resultIsPar) vencedor = '1'
    else vencedor = '2'
}

console.log(`Jogador ${vencedor} ganha!`)
process.exit(0)