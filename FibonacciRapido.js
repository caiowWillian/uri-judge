const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question("", function(answer){
    console.log(fibonnaci(answer).toFixed(1))
    process.exit(0)
})

function fibonnaci(n) {
    const sqrt5 = Math.sqrt(5)
    return (Math.pow( (1 + sqrt5) / 2, n)  - (Math.pow((1 - sqrt5) / 2, n))) / sqrt5
}