const  http = require('http');
const PORT = 8080 ;
const HOST = 'localhost';
const server = http.createServer((req,res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World !');
    }
    else if (req.url === '/about') {
        res.setHeader('Content-Type' ,'text/plain');

        res.end('About Page !!');
    }
    else{
        res.setHeader('Content-Type' ,'text/plain');

        res.end('404 Page !!');
    }

})
server.listen(PORT, HOST, () => {
    console.log('server running on port ' + PORT);
})