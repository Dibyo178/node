const http = require('http');
const PORT = process.env.PORT;
const fs = require('fs');
const hostname = '127.0.0.1';


const handleReadFile = ( fileName ,statusCode,req,res) => {
    fs.readFile(fileName,'utf-8', (err, data) => {
        if (err) {
              console.error(err);
        }
        else {
            res.writeHead(statusCode, "Content-Type", "text/html");
            res.write(data);
            res.end();
        }
    })
}

const myServer = http.createServer((req, res) => {
    if (req.url === '/') {
        handleReadFile("index.html",200,req,res);
    }
   else if (req.url === '/about') {
        handleReadFile("about.html",200,req,res);
    }
   else if (req.url === '/contact') {
        handleReadFile("contact.html",200,req,res);
    }
    else {
        handleReadFile("error.html",200,req,res);
    }
});

myServer.listen(PORT, () => {
    console.log(`listening on port http://${hostname}:${PORT}`);
})