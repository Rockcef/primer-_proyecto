const fs = require("node:js")

const append = fs.appendFileSync("nuevoarchvo.txt", "mas informacion","utf8")

console.log(append)