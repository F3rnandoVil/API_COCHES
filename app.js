const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res) => {
    res.json({jala: "Si jala la cosa"})
})

app.listen(3000, ()=> {
    console.log("Escuchando en puerto 3000")
})