const express = require('express');
const path = require('path');
const app = express();


app.get ('/' , (req,res ) => {
    res.sendFile(path.join(__dirname,'source/index.html'))
})

app.get ('/about' , (req,res ) => {
    res.sendFile(path.join(__dirname,'source/about.html'))
})
app.get ('/about-me' , (req,res ) => {
    res.statusCode=301;
    res.redirect('/about');
})
app.get ('/api' , (req,res ) => {
    res.statusCode=200;
    const data= {
        message:'Hallo API',
        date: new Date().toISOString(),
    }
    res.setHeader('Content-Type','application/json');
    res.send(JSON.stringify(data));
})

app.get ('/api/data' , (req,res ) => {

    res.setHeader('Content-Type','application/json');
    res.sendFile(path.join(__dirname,'source/data.json'));
})

app.use ( (req,res ) => {
    res.statusCode=404;
    res.sendFile(path.join(__dirname,'source/404.html'))
})
app.listen(8080,'localhost', ()=> {
    console.log('Server running on port 8080');
})
