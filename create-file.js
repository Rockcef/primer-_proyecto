const fs = require("node:fs");

const data = fs.readFileSync("nuevoarchivo.txt", "utf8");

console.log(data)
