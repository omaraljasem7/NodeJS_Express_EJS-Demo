const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.json());

app.use(express.urlencoded(
    {extended:true}
))

app.set('views','./views');

// for the route /api/user
let id =1;

// users for put request and delete request
let users = [
    {id:1,name:'Max',email:'max@gmail.com'},
    {id:2,name:'test',email:'test@test.com'},
    {id:3,name:'tom',email:'tom@google.com'}

]

app.get('/users',(req,res)=> {
    res.json(users);
})

app.get('/users/:id' ,(req,res) => {
    const  id = parseInt(req.params.id);

    const index= users.findIndex(user => user.id === id);

    if(index === -1){
        res.status(404).send('User not found.');
        return ;

    }
    else{
        res.status(200).json(users[index]);
    }

})

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

// Post request

app.post('/test', (req,res)=>{
    console.log(req.body);
    console.log(req.body.name);
    console.log(req.body.email);
    res.setHeader('Content-Type','text/plain');
    res.send('Thanks, request received');
})

// send a json object back from the request bdoy

app.post('/test1', (req,res)=>{
    console.log('Request received');
    res.setHeader('Content-Type','application/json')
    res.send(JSON.stringify(req.body));
})

// get request for the form
app.get('/form', (req,res) => {
    res.render('form',{
        title:'Form',
    });
})

// POST for submit the form

app.post('/submit',(req,res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    console.log('Name: ' + name);
    console.log('Email: ' + email);
    console.log('Message: ' + message);
    res.send('Thanks ' + name + ' we have received the request !!!');

})

// api post

app.post('/api/user',(req,res) =>{
    const name = req.body.name;
    const email = req.body.email;


    const newUser= {
        id : id,
        name: name,
        email: email,
        created : new Date().toISOString()
    }
    id++;
    res.status(201).json(newUser);
})


// put request

app.put('/users/:id' ,(req,res) => {
    const id =Number(req.params.id);
    // console.log(typeof id)
    //type is string
    // without string -> number , index is always -1
    console.log('ID = ' ,id);
    const newUser= req.body;
    const index = users.findIndex(b => {
        return b.id === id;
    });
    console.log(index);
    if(index === -1 ) {
        res.status(404).json({message:'User not found'});
        return;
    }
    else {
        users[index] = {id: id, ...newUser};
        res.json({
                message:'user successfully updated!',
                data: users[index]
            }
        );
    }
})


// Patch request

app.patch('/users/:id',(req,res) => {
    const id =parseInt(req.params.id);
    console.log('Id = ' + id);
    const update = req.body;
    console.log('Body = ' + req.body)
    const index= users.findIndex(b => b.id===id);
    console.log('index = ' , index);
    if (index === -1 ){
        res.status(404).end('User not found');
    }
    else{
        users[index] = {...users[index],...update};
        res.json({
            message:'User updated',
            data:users[index]
        })
    }
})

// delete request

app.delete('/users/:id', (req,res) => {
    // take the id from req.params.id and cast from string -> Int
    const id = parseInt(req.params.id);
    console.log('delete requested for id = ' ,id);
    // find the index of the element, that should

    const index =users.findIndex(b => b.id ===id );
    if(index === -1){
        res.setHeader('Content-Type','text/plain');
        res.status(404).send('User not found');
    }
    else{
        const deletedUser =users.splice(index,1);
        console.log(deletedUser);
        res.json({
            message:'user deleted',
            deleted : true,
            data:deletedUser[0]
        })
    }
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