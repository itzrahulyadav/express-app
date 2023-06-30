const express = require("express")
const app = express()


app.get("/",(req,res)=>{
    res.send("hello");
});
app.get("/main",(req,res)=>{
    res.send("Hello,I hope you have a great day");
})

app.listen(80,()=>{
    console.log("server is listening at port 3000")
})