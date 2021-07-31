var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

const minimum = 8
lines.shift()
incrementObj(lines)

function show(obj) {
    obj = obj.sort(function(a,b){
        return b.nota - a.nota
    })
    
    const first = obj.shift()

    if(first.nota >= minimum) console.log(first.matricula)
    else console.log('Minimum note not reached')

    process.exit(0)
}

function incrementObj(a,obj = []) {
    let value = a.shift()
    if(value == undefined || value == '') show(obj)
    
    value = value.split(' ').map(Number)

    obj.push({
        matricula: value[0],
        nota: value[1]
    })

    incrementObj(a,obj)
}