var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let competidores = []

for(var i = 1; i < lines.length; i++) {
    if(lines[i] == '') break

    competidores.push({
        nome: lines[i],
        peso: parseFloat(lines[++i]),
        notas: lines[++i].split(' ')
                        .map(Number)
                        .sort(function(a,b){
                            return a - b
                        })
    })
}

competidores.forEach(function(value,key) {
    value.notas.pop()
    value.notas.shift()
    var sum = 0
    value.notas.forEach(function(value, key) {
        sum += value
    })
    console.log(`${value.nome} ${(sum * value.peso).toFixed(2)}`)
})

process.exit(0)