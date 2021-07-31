var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const map = {
    '0': 'PROXYCITY',
    '1': 'P.Y.N.G.',
    '2': 'DNSUEY!',
    '3': 'SERVERS',
    '4': 'HOST!',
    '5': 'CRIPTONIZE',
    '6': 'OFFLINE DAY',
    '7': 'SALT',
    '8': 'ANSWER!',
    '9': 'RAR?',
    '10': 'WIFI ANTENNAS'
}

for(var i = 1; i <= parseInt(lines[0]); i++){
    let values = lines[i].split(' ')
    let sum = parseInt(values[0]) + parseInt(values[1])
    console.log(map[sum])
}