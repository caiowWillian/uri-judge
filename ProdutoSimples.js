const readLine = require('readline')

const read = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

function ask(question) {
    return new Promise(function(resolve){
        read.question(question,function(answer){
            resolve(answer)
        })
    })
}

async function main() {
    const n1 = await ask("")
    const n2 = await ask("")

    console.log(`PROD = ${n1 * n2}\n`)
    process.exit(0)
}

main()