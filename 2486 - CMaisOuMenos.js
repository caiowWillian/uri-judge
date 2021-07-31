var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valorNutri = 0
for(var i = 0; i < lines.length; i++) {
    const repeat = lines[i]

    if(repeat == 0) break

    for(var y = 0; y < repeat; y++) {
        i++
        let alimento = lines[i].split(' ')
        const quantidadeAlimento = parseInt(alimento[0])
        alimento.shift()
        alimento = alimento.join(' ')
        valorNutri+= quantidadeAlimento * tabelaAlimentos(alimento)
    }
    if(valorNutri >= 110 && valorNutri <= 130) console.log(`${valorNutri} mg`)
    else if(valorNutri < 110) console.log(`Mais ${110 - valorNutri} mg`)
    else console.log(`Menos ${valorNutri - 130} mg`)
    valorNutri = 0
}

function tabelaAlimentos(alimento) {
    switch(alimento) {
        case 'suco de laranja':
            return 120
        case 'morango fresco':
            return 85
        case 'mamao':
            return 85
        case 'goiaba vermelha':
            return 70
        case 'manga':
            return 56
        case 'laranja':
            return 50
        case 'brocolis':
            return 34
    }
}