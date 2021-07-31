var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

let sequence = [0,0]
let notas = []
for(var i = 0; i < lines.length; i++) {
    if(lines[i] == '') break


    if(sequence[0] == 0 && sequence[1] == 0) {
        notas = []
        sequence = lines[i].split(' ')
        sequence[0] = parseInt(sequence[0])
        sequence[1] = parseInt(sequence[1])
        continue
    }

    if(sequence[0] > 0) {
        sequence[0]--
        notas.push(parseInt(lines[i]))
    } else {
        notas.sort(function(a,b) {
            return b - a
        })
        sequence[1]--
        console.log(notas[lines[i]-1])
    }
    
}
process.exit(0)