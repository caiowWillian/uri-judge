var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

for(var i = 0; i < lines.length; i++) {
    let hoursAndMinutes = lines[i].split(':')
    
    hoursAndMinutes[0] = parseInt(hoursAndMinutes[0])
    hoursAndMinutes[1] = parseInt(hoursAndMinutes[1])

    if (hoursAndMinutes[0] >= 5 && hoursAndMinutes[0] <= 6)
        console.log(`Atraso maximo: ${0}`);
    else if (hoursAndMinutes[0] == 7)
        console.log(`Atraso maximo: ${hoursAndMinutes[1]}`);
    else if (hoursAndMinutes[0] == 8)
        console.log(`Atraso maximo: ${hoursAndMinutes[1]+60}`, );
    else if (hoursAndMinutes[0] == 9)
        console.log(`Atraso maximo: ${120+hoursAndMinutes[1]}`, );   
}