const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));

app.set('views','./views');

app.get('/' , (req,res) => {
    res.render('index',{
        title:'Homepage',
        name : 'Omar'
    });
})

app.get('/about' , (req,res) => {
    res.render('about', {
        title:'About',
        name :'Omar'
    });
})

app.get('/about-me', (req,res) => {
    res.status(301).redirect('/about');
})

app.get('/api' , (req,res)=>{
    const data= {
        message: 'Hello API',
        data:new Date().toISOString()
    }
    res.json(data);
})


app.get('/product' , (req,res) => {
    res.render('product', {
        title:'Products',
        productName:'Laptop',
        price:99.99,
        discount:9.99
    })
})

app.get('/profile', (req,res) => {
    res.render('profile' , {
        title : 'Profile Page',
        name: 'Omar',
        loggedIn:true
    })
})

app.get('/blog' , (req,res) => {
    const article=[
        'Js Basics',
        'Node.js',
        'Express.js',
        'EJS'
    ]
    /*
    article.forEach((article) => {
        console.log(article)
    })
     */
    res.render('blog', {
        title:'Blog Page',
        article:article
    })
})

app.get('/products', (req,res) => {
    const products = [
        {name : 'Laptop' , price:999},
        {name : 'Monitor' , price:1563.45},
        {name : 'Keyboard' , price:14.95},
    ]
    products.forEach(product=>{
        console.log(product.name);
        console.log(product.price);
    })
    res.render('products',{
        title:'Products',
        products:products
    })
})

app.use((req,res) => {
    res.status(404).render('404',{
        title: '404 Page',
        name : 'Omar Aljasem'
    });
})

app.listen(8080,'localhost',()=> {
    console.log('Express server listening on port 8080')
});