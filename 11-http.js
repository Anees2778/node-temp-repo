const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcone to home page');
    } else if (req.url === '/about') {
        res.end('its about page')
    }
    else {
        res.end(`
        <h1>Oops!!</h1>
        <h3>page not found!!!</h3>
        <a href='/'>back to home</a>
        `);
    }
})
server.listen(5000);