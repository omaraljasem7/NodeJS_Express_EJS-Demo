const  http = require('http');
const PORT =8080;

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.setHeader('Content-Type' , 'text/html');
        res.statusCode= 200;
        res.end('<h1>Home Page</h1>')
    }
    else if (req.url ==='/about'){
        res.setHeader('Content-Type' , 'text/html');
        res.statusCode= 200;
        res.end('<h1>About Page</h1>')
    }
    else{
        res.setHeader('Content-Type' , 'text/html');
        res.statusCode= 404;
        res.end('<h1>404 Page</h1>')
    }
});

server.listen(PORT,'localhost',() => {
    console.log('Server is running on port ' + PORT);
})