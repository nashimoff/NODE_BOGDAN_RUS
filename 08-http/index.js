const http = require('http')

const PORT = 5000

const server = http.createServer((req, res) => {
    if (req.url === '/http') {
        res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    return res.end('<h1>Greetings from the HTTP server!</h1>');
    } 
    if (req.url == '/text') {
        res.statusCode = 200
        res.setHeader('Content-Type','text/plain')
        return res.end('This is plain text')
    }
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});


