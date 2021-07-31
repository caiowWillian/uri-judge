//var input = require('fs').readFileSync('/dev/stdin', 'utf8')
//var lines = input.split('\n')

var lines = [
    '78954',
    '7895478954789547895447895478954'
]

var line1
var line2
let caseCount = 0
while(true) {
    caseCount++
    if(lines.length == 0) break
    
    line1 = lines.shift()
    line2 = lines.shift()

    console.log(verifySubsec(line1,line2))
}



function verifySubsec(str1,str2) {
    const str1Lenght = str1.length
    let value
    let count = 0
    let quantidadeSubs = 0
    let indexSub = 0
    while(true) {
        if(count+str1Lenght >= str2.length) break
        console.log(`${count} ${str1Lenght}`)
        value = str2.substring(count,str1Lenght+count)
        console.log(value)
        if(value == str1) {
            quantidadeSubs++
            indexSub = count
        }  
        count++
    }

    return {
        quantidadeSubs: quantidadeSubs,
        indexSub: indexSub
    }
}