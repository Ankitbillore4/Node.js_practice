// for creating a file 

const fs = require('fs');

fs.writeFile("hello.txt","hii helo Chaloo",(err)=>{
    if(err) console.log(err);
    else console.log("file written successfully");
})
