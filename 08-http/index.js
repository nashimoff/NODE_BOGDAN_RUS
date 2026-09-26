const http = require('http');

const PORT = 5000;

const comments = [
    { id: 100, text: 'First comment', author: 'Bogdan' },
    { id: 526, text: 'Second comment', author: 'Alice' },
    { id: 7246, text: 'Last comment', author: 'Bob' },
];

function getHTML(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write('<html><body><div>')
    res.write('<h1>Greetings from the HTTP server!</h1>')
    res.write('</div></body></html>')
    return res.end('');
}

function getText(req, res) {
    
}

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res)
    }
    if (req.method === 'GET' && req.url == '/text') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        return res.end('This is plain text')
    }
    if (req.method === 'GET' && req.url === '/comments') {
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        return res.end(JSON.stringify(comments))
    }

    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html')
    return res.end('<h1>Page not found!</h1>')
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});


