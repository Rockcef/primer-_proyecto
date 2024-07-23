const fs = require("node:fs")

/*fs.appendFileSync("nuevoarchivo.txt", "data to append", "utf8")
console.log(fs.appendFilesync)*/

/*const copia = fs.copyFileSync("nuevoarchivo.txt", "nuevoarchivo2.txt")
console.log(copia)*/

const unLinkSync = fs.unlinkSync("nuevoarchivo.txt")