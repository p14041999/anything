const express = require("express");
const app = express();

app.get('/',(req,res)=>{
    
    res.send("Home sweet home!"+process.env.ANY_THING)
})

app.listen(8000,()=>{
    console.log("Running Application")
})