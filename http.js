const http = require('http');

const server = http.createServer((req,res) => {

    if(req.url === '/') {
        res.end('welcome home');
    }
    if(req.url === 'about') {
        res.end('this is about');
    }
    res.end(`
        <h1>Ooops!!!!</h1>
        <p>sorry for the info go away</p>
        <a href="/">back home</a>
    `)
    res.write('hello world')
    res.end()
})

server.listen(5000)

