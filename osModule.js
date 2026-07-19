const os = require('os');
console.log(os.homedir());
console.log(os.platform())
console.log(os.hostname())
console.log(os.freemem())
console.log(os.totalmem())
console.log(os.uptime())
console.log(os.type())

console.log(os.arch())
console.log(os.userInfo().shell)
console.log(os.userInfo().homedir)
console.log(os.cpus().length)
console.log(os.machine())
console.log(os.release())
console.log(os.version())
const freeMem = (os.freemem()/1024/1024/1024).toFixed(2)
console.log(`Free Mem: ${freeMem}`);
console.log(os.cpus().length);

console.log(os.platform())

if(os.platform() === 'win32'){
    console.log('you have windows ')
}
else if(os.platform() === 'darwin'){
    console.log('you have Mac Os')
}
else{
    console.log('you have Linux')
}