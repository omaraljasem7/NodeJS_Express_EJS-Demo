const express = require('express');
const app = express();
const PORT = 3000;

app.get('/',(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    res.send('Home Page')
});

app.get('/about',(req,res) =>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain')
    res.send('About Page')
})

app.use((req,res) =>{
    res.statusCode=404;
    res.setHeader('Content-Type','text/plain')
    res.send('404 Page')
})

app.listen(PORT, 'localhost', () => {
    console.log('Server is running on port: ' +PORT);
})