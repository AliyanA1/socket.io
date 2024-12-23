const cluster=require("cluster");
const exp = require("constants");
const express=require("express");
const os=require("os");

const total = os.cpus().length;


if(cluster.isPrimary){
    console.log(`it is the main code: ${process.pid}`)

    for(let i=0; i<total; i++){
        cluster.fork()
    }
}else{
   const app=express();
   app.get("/",(req,res)=>{
      res.send(`its running on the server code: ${process.pid}`)
   })
   app.listen(4000,()=>{
     console.log("server started on the port 4000")
   })
}