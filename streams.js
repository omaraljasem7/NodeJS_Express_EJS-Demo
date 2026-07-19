const fs = require('fs');
const  path = require('path');

const readStream = fs.createReadStream('./test.txt','utf8');
readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('end', (chunk) => {
    console.log('file completely read ')
})
readStream.on('error', (err) => {
    console.log('error: '+ err);
})
readStream.on('open' , (err) => {
    console.log('file open, next read  ')
})