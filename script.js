// for creating a file                                   //code script.js(vs code me lejaygi)
const { log } = require('console');
const fs = require('fs');

fs.writeFile("hello.txt","hii helo Chaloo",(err)=>{
    if(err) console.log(err);
    else console.log("file written successfully");
})


//for append File (bani banai file me aagey kuch add karna )
fs.appendFile("hello.txt","  Kha Chalo",(err)=>{
if(err){
    console.log(err);

}else{
    console.log("Appended Sucesfully");
}
})

// for rename a file 
fs.rename("hello.txt","helooow1.txt",(err)=>{
    if(err){
        console.log(err);

    }else{
        console.log("Rename Sucesfully");
    }
})

// for delete a file 

fs.unlink("heloow1.txt",(err)=>{
if(err){
    console.log(err);

}else{
    console.log("File Deleted");
}
})