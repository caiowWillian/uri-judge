const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

read.question("", function(answer){
    console.log(answer.length <= 80 ? "YES" : "NO") 
    process.exit(0)
})