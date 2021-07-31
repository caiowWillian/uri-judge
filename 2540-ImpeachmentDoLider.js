var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

for(var i = 0; i < lines.length; i++) {
    if(lines[i] != '') {
        if(i % 2 == 0) continue
        const result = main(lines[i])
        console.log(verify(result))
    }
}

function verify(result) {
    const sum = result.favor + result.contra

    if( result.favor >= sum*(2/3) ) return "impeachment"
    return "acusacao arquivada"
}

function main(lines) {
    var favor = 0
    var contra = 0
    const votos = lines.split(' ')

    for(var i = 0; i < votos.length; i++) {
        if(votos[i] == 1) favor++
        else contra++
    }

    return {
        favor: favor,
        contra: contra
    }
}

process.exit(0)