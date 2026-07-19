const fs =require('fs');
const path = require('path');

const  pathDir= path.join(__dirname,'myFolder');
console.log(pathDir);
console.log(__dirname);
// mkdir using a path.join

const otherPath = path.join(__dirname , 'TestDir')

let  flag =false;
function createDir() {
    if (!(fs.existsSync(otherPath))) {
        fs.mkdirSync(otherPath, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Directory successfully created in ' + otherPath);
                flag = true;
            }
        })
    }
}

let filePath = path.join(otherPath, 'test.txt')

function createFile() {
    if (!(fs.existsSync(filePath))) {
        if (!(fs.existsSync(filePath))) {
            fs.writeFileSync(filePath, 'Write sth in to the file test.txt', (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('file created in ' + filePath);
                }
            })
        }
    }
}
createDir();
createFile();