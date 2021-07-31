var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const pedra = 'pedra'.toUpperCase()
const papel = 'papel'.toUpperCase()
const tesoura = 'tesoura'.toUpperCase()

function returnMessage(result) {
    if(result.vencedor == 'Empate') return 'Putz vei, o Leo ta demorando muito pra jogar...'

    switch(result.vencedor) {
        case 0:
            return 'Os atributos dos monstros vao ser inteligencia, sabedoria...'
        case 1:
            return `Iron Maiden's gonna get you, no matter how far!`
        default:
            return `Urano perdeu algo muito precioso...`
    }
}

for(var i = 0; i < lines.length; i++) 
    if(lines[i] != ''){
        console.log(returnMessage(start(lines[i])))
    }

function start(line) {
    let empatadados = undefined

    const jogadas = line.split(' ')
    
    if(jogadas.filter((v,i,a) => a.indexOf(v) == i).length == 3) 
        return {
            j1: 0,
            j2: 0,
            vencedor: 'Empate'
        }

    let primeiroJogador = 0
    let result
    for(var i = 0; i < jogadas.length; i++) {
        if(empatadados != undefined) {
            result = resultado(jogadas[i+1],jogadas[empatadados.j1],i+1,empatadados.j1)
            if(result.vencedor == empatadados.j1) 
                result.vencedor = 'Empate'
            else 
                empatadados = undefined
        } else 
            result = resultado(jogadas[primeiroJogador], jogadas[i+1],primeiroJogador,i+1)


        if(result.vencedor == 'Empate') empatadados = result
        
        primeiroJogador = result.vencedor
        if(i+2 == jogadas.length) return result

    }
}

function resultado(primeiro, segundo, j1,j2){
    primeiro = primeiro.toUpperCase()
    segundo = segundo.toUpperCase()

    if(!verificaVencedor(primeiro,segundo)) {
        if(verificaEmpate(primeiro,segundo)) {
            return {
                j1: j1,
                j2: j2,
                vencedor: 'Empate'
            }
        } 
    }else{
        return {
            j1: j1,
            j2: j2,
            vencedor: j1
        }
    }
    return {
        j1: j1,
        j2: j2,
        vencedor: j2
    }
}

function verificaEmpate(primeiro,segundo) {
    if(primeiro == segundo) return true
    return false
}

function verificaVencedor(primeiro,segundo) {
    

    if(primeiro == pedra && segundo == tesoura) return true
    if(primeiro == papel && segundo == pedra) return true
    if(primeiro == tesoura && segundo == papel) return true
    return false
}

process.exit(0)