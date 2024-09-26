
const fs = require('fs');                                //code script.js(vs code me lejaygi)


// // for creating a file                                   

// fs.writeFile("hello.txt","hii helo Chaloo",(err)=>{
//     if(err) console.log(err);
//     else console.log("file written successfully");
// })


// //for append File (bani banai file me aagey kuch add karna )
// fs.appendFile("hello.txt","  Kha Chalo",(err)=>{
// if(err){
//     console.log(err);

// }else{
//     console.log("Appended Sucesfully");
// }
// })

// // for rename a file 
// fs.rename("hello.txt","helooow1.txt",(err)=>{
//     if(err){
//         console.log(err);

//     }else{
//         console.log("Rename Sucesfully");
//     }
// })

//for read a file 
// fs.readFile("hello.txt","utf-8",(err,data)=>{
    // if(err) console.log(err);
    // else console.log(data);
// })
// 


//for delete a file 
// fs.unlink("hello.txt",(err)=>{
    // if(err) console.log(err);
    // else console.log("File Deleted");
// })
// 
// 

//for delete a directory 
// fs.rmdir("./copy",(err)=>{
    // if(err) console.log(err);
    // else console.log("Directory Deleted");
// })


//for create a directory 
// fs.mkdir("./new folder",(err)=>{
    // if(err) console.log(err);
    // else console.log("Directory Created");
// })


//for read a directory 
// fs.readdir("./new folder",(err,data)=>{
    // if(err) console.log(err);
    // else console.log(data); 
// })