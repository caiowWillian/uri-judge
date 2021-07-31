var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const sitio = parseInt(lines.shift())
let carneiros = lines.shift().split(' ').map(Number)

let totalCarneiro = 0
let totalCarneirosRoubados = 0
let sitiosRoubados = []

for(var i = 0; i < sitio; i++) {
    sitiosRoubados.push(0)
}

carneiros.forEach(function(value, key) {
    totalCarneiro += value
})

var isPar = false
var i = 0

while(i < sitio) {
    isPar = (carneiros[i] % 2) == 0 ? true : false
    if(carneiros[i] > 0) {
        carneiros[i]--
        totalCarneirosRoubados++
        sitiosRoubados[i] = 1
    }
    i = isPar ? i-1 : i+1
    if(i < 0 || i >= sitio) break
}
var totalSitiosRoubados = 0
sitiosRoubados.forEach(function(value,key) {
    totalSitiosRoubados+=value
})
console.log(`${totalSitiosRoubados} ${totalCarneiro-totalCarneirosRoubados}`)