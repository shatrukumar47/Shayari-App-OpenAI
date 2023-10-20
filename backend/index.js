const express = require("express");
const app = express();

app.use(express.json());


app.get("/", (req, res)=>{
    res.send("Welcome to Shayari App");
})


app.listen(8080, ()=>{
    console.log("Server is live at Port 8080")
})