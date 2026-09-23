const http = require('http')

const PORT = 5000

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Greetings from the HTTP server!');
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});

//
