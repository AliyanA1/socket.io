const express=require("express");
const fs=require("fs");
const zlib=require("zlib");
const app=express();
 

 

app.get("/",(req,res)=>{
   const stream=fs.createReadStream("./hey.txt","utf-8");
   stream.on("data", (chunk)=> res.write(chunk));
   stream.on("end", ()=> res.end())
})

fs.createReadStream("./hey.txt").pipe(
   zlib.createGzip().pipe(fs.createWriteStream("./hey.zip"))
)

app.listen(4000)