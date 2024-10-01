
//..................Fs start........................//

const { default: chalk } = require("chalk");
const { log } = require("console")

// const fs = require('fs');                                //code script.js(vs code me lejaygi)

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


// fs.unlink("hello.txt",(err)=>{
    // if(err) console.log(err);
    // else console.log("File Deleted");
// })
// 
// 
// fs.unlink("./new folder/index.html",(err)=>{
    // if(err) console.log(err);
    // else console.log("File Deleted");
// })

// fs.writeFile("./new folder/style.css","heloo Gyus",(err)=>{
    // if(err) console.log(err);
    // else console.log("File Created");
// })
// 
// fs.unlink("./new folder/style.css",(err)=>{
    // if(err) console.log(err);
    // else console.log("File Deleted");
// })  
// 


//.................Fs end........................//


//..................Os start........................//

// const os = require('os');
//EOL = for end of line
// console.log(os.EOL);
//for cpu info
// console.log(os.cpus());
//for os version
// console.log(os.version());
//for available parallelism
// console.log(os.availableParallelism());
//for user info
// console.log(os.userInfo());
//for os type
// console.log(os.type());
//for os architecture
// console.log(os.arch());
//for os uptime
// console.log(os.uptime());

//..................Os end........................//

//..................http start........................//

// const http = require('http');
// server creating
// const server = http.createServer((req,res)=>{
    // res.end("Hello Ankit Billore");
// })
// 
// server.listen(3000,(err)=>{
    // if(err){
        // console.log(err);
    // }else{
        // console.log("Server is running on port 3000");
    // }
// })
// 
// 
// const http= require("http");
// check url Based Server...
// const server = http.createServer(function(req,res){
    // if(req.url== "/" || req.url=="/Home"){
        // res.end("hello server was created :");
    // } else if (req.url=="/About"){
        // res.end("Hello about Page Was Open :")
    // } else if (req.url=="/Contact"){
        // res.end("Hello Contact Page Was open :")
    // } else if(req.url=="/Course"){
        // res.end("hello Course Page Was Open :")
    // }
    //   else{
        // res.end("404 Page Not Found ....")
    // }
// })
// server.listen(3000,function(err){
    // if (err) console.log(err);
    // else console.log("Creating Server....");
// })
 // Server Creating Ended......



 //npm :.........
 // requiring cat-me pakage from npm for random cat..... 

//  const cat = require("cat-me")
//  console.log(cat())

 const oneLinerJoke =  require("one-liner-joke");

  console.log(oneLinerJoke.getRandomJoke());