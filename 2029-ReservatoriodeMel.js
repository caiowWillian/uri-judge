var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

main(lines)

function main(lines) {
    if(lines.length == 0 || lines[0] == '') process.exit(0)
    
    const volume = parseFloat(lines.shift())
    const diametro = parseFloat(lines.shift())

    const area =  3.14 * Math.pow(diametro/2,2)
    const altura = volume / area
    console.log(`ALTURA = ${altura.toFixed(2)}`)
    console.log(`AREA = ${area.toFixed(2)}`)
    main(lines)    
}