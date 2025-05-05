// install NPM
// npm init -y
// npm install prompt-sync

// import prompt-sync
const prompt = require("prompt-sync")()

const input = prompt("User input :")
console.log(input)
console.warn(input)
console.error(input)