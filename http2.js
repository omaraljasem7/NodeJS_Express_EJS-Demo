const http = require('http');
const fs = require('fs');
const path = require('path');


const server =http.createServer((req,res) => {
    if (req.url==='/'){
        const homePage = path.join(__dirname,'source/index.html');
        fs.readFile(homePage,'utf8',(err, data) => {
            if (err ){
                res.setHeader('Content-Type','text/plain');
                res.statusCode = 404 ;
                res.end('Source not found ');
            }
            else {
                res.setHeader('Content-Type', 'text/html');
                res.statusCode=200;
                res.end(data);
            }
        })
    }

    else if (req.url==='/about'){
        const aboutPage = path.join(__dirname,'source/about.html');
        fs.readFile(aboutPage,'utf8',(err, data) => {
            if (err ){
                res.setHeader('Content-Type','text/plain');
                res.statusCode = 404 ;
                res.end('Source not found ');
            }
            else {
                res.setHeader('Content-Type', 'text/html');
                res.statusCode=200;
                res.end(data);
            }
        })
    }
    else if (req.url==='/api'){
        const jsonFile = path.join(__dirname,'source/api.json');
        fs.readFile(jsonFile,'utf8',(err, data) => {
            if (err ){
                res.setHeader('Content-Type','text/plain');
                res.statusCode = 404 ;
                res.end('Source not found ');
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode=200;
                res.end(data);
            }
        })
    }
    else if (req.url==='/api/data'){
        const data= {
            message:"Hallo API",
            timestamp:Date.now()
        }
        res.setHeader('Content-Type','application/json');
        res.statusCode=200;
        res.end(JSON.stringify(data));
    }
    //redirect
    else if (req.url === '/about-me'){
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
    }

    else {
        const notFoundPage = path.join(__dirname,'source/404.html');
        fs.readFile(notFoundPage,'utf8',(err, data) => {
            if (err ){
                res.setHeader('Content-Type','text/plain');
                res.statusCode = 404 ;
                res.end('Source not found ');
            }
            else {
                res.setHeader('Content-Type', 'text/html');
                res.statusCode=404;
                res.end(data);
            }
        })
    }


});

server.listen(8080,'localhost', () => {
    console.log('listen on port 8080');
});