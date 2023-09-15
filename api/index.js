const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.get("/", async(req, res)=>{
    res.json("ok")
})

app.get("/ders/:id", async(req,res)=>{
    res.json([{q:"Üçgenin iç açıları toplamı kaçtır ?",a:"180"}])
})

app.listen(4000, ()=>{
    console.log(4000,"port on")
})