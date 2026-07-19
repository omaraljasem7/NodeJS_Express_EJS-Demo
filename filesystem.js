const fs = require('fs');
const path = require('path');



fs.readFile('./test.txt' , 'utf8',(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data)
})

// write a file
if (!(fs.existsSync('./myFile.txt'))){
    fs.writeFile('./myFile.txt', 'Other Hello World ' , 'utf8',(err) => {
        if(err)
            console.log(err)
    })
}

if( fs.existsSync('./myFile.txt') ){
    fs.writeFileSync('./myFile.txt', '\nOther Test\n', {flag:'a'},(err)=>{
        if(err)
            console.log(err);
        else{
            console.log('data successfully appended ')
        }
    })
}

// mkdir
if (!fs.existsSync('./myFolder')){
    fs.mkdir('./myFolder',(err)=>{
        if(err)
            console.log(err);
        else
            console.log('folder created ')
    })
}

// make a recursive directory and after the creating, create a file inside the last subfolder and write sth into it

if (!fs.existsSync('./parent')){
    fs.mkdirSync('./parent/child/grandchild',{recursive:true},(err) => {
        if(err)
            console.log(err)
        else {
            console.log('recursive directory created ');

        }
    })
}

if(!(fs.existsSync('./parent/child/grandchild/test.txt'))){
    fs.writeFileSync('./parent/child/grandchild/test.txt', 'I am in the grandchild folder ', 'utf8', (err) => {
        if (err)
            console.log(err);
        else
            console.log("file created in grandchild")
    })

}