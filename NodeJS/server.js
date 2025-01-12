const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let server = http.createServer((req, res) => {
    const rUrl = url.parse(req.url, true).pathname;

    if (rUrl === "/") {
        fs.readFile('home.html', (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end('Error Loading Home Page');
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    } else if (rUrl === "/about") {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end('Error Loading About Page');
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    } else if (rUrl === "/contact") {
        fs.readFile('contact.html', (err, data) => {
            if (err) {
                res.writeHead(500, {"Content-Type": "text/html"});
                res.end("Error Loading Contact Page");
            } else {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(data);
            }
        });
    } else if (rUrl.endsWith(".css")) {
        const filePath = path.join(__dirname, rUrl);
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404, {"Content-Type": "text/plain"});
                res.end("CSS File Not Found");
            } else {
                res.writeHead(200, {"Content-Type": "text/css"});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
