const {readFile, writeFile} = require('node:fs');

readFile('./content/readfile.txt', 'utf-8', ((err,result) => {
    if(err) return err;
    const first = result;

    writeFile('./content/asyncfilewrite.txt', first, (err,result)=> {
        console.log(result)
    })
}))