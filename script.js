// for creating a file 
const fs = require('fs');

fs.writeFile("hello.txt","hii helo Chaloo",(err)=>{
    if(err) console.log(err);
    else console.log("file written successfully");
})


//append File (bani banai file me aagey kuch add karna )
fs.appendFile("hello.txt","  Kha Chalo",(err)=>{
if(err){
    console.log(err);

}else{
    console.log("Appended Sucesfully");
}
})