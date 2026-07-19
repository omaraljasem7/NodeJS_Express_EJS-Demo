const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.sendFile(path.join(__dirname,'index.html'))
});

app.get('/about',(req,res) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.sendFile(path.join(__dirname,'about.html'))
})

app.use((req,res) =>{
    res.statusCode=404;
    res.setHeader('Content-Type','text/html')
    res.sendFile(path.join(__dirname,'404.html'))

})

app.listen(PORT, 'localhost', () => {
    console.log('Server is running on port: ' +PORT);
})