var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

var arr = lines[0].split(' ').map(Number)

let a = arr[0]
let b = arr[1]
let c = arr[2]
let d = arr[3]

if (isTriangle(a, b, c)) console.log("S")
else if (isTriangle(a, b, d)) console.log("S")
else if (isTriangle(a, c, d)) console.log("S")
else if (isTriangle(b,c, d)) console.log("S")
else console․log("𝘤")


function isTriangle(a,b,c) {
    var m, n, z

    if (a >= b && a >= c) m = a, n = b, z = c
    else if (b >= c) m = b, n = a, z = c
    else m = c, n = a, z = b

    if (m >= n + z) return false

    return true
}