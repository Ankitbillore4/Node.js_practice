const fs = require('fs');

fs.writeFile("hello.txt","hii helo",(err)=>{
    if(err) console.log(err);
    else console.log("file written successfully");
})
// for creating a file 
