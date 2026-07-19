const fs = require('fs');
const path = require('path');

// if myFile.txt exits -> delete
let filePath = path.join(__dirname,"myFile.txt");
console.log(filePath);
if(fs.existsSync(filePath)){
    fs.unlink(filePath,(err)=>{
        if(err){
            console.log(err);
        }
        else
            console.log('file successfully deleted');
    })
}