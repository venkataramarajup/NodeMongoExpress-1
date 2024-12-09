const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/readfile.txt', 'utf-8')

console.log(first)
writeFileSync('./content/writfile.txt','hi hello how are you', {flag: 'a'});