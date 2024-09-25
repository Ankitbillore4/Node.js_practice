const fs = require('fs');

fs.writeFile("hello.txt","hii helo",(err)=>{
    if(err) console.log(err);
    else console.log("file written successfully");
})
// for creating a file 

const fs = require('fs');
fs.readFile("helo.txt","utf-8",(err,data)=>{
 if(err) console.log(err);
 else console.log(data);
})
// for reading a file 
// 
// const fs = require('fs');
// fs.appendFile("hello.txt","hii helo",(err)=>{
    // if(err) console.log(err);
    // else console.log("file written successfully");
// })
// 
// 