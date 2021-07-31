const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ask(question) {
    return new Promise(function(resolve) {
        read.question(question, function(answer){
            resolve(answer)
        })
    })
}

async function main() {
    let numbers = 0
    let count = 0
    let answers = []
    while(count < 3) {
        answer = await ask("")

        if (!IsShout(answer)) {
            numbers += parseInt(convertEyesInBinary(answer),2)
        } else {
            console.log(numbers)
            numbers = 0
            count++
            
        } 
    }
    
    for(var i = 0; i < answers.length; i++) {
        console.log(answers[i])
    }

    process.exit(0)
}

function IsShout(txt) {
    return txt === "caw caw"
}

function convertEyesInBinary(txt) {
    let binary = ""
    for(var i = 0; i < 3; ++i) {
        binary = binary.toString() + (txt[i] == '*' ? "1" : "0").toString()
    }
    return binary
}

main()