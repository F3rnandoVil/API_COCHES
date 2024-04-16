const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true}))

carros = [
    {
        placa: "FVQ2345A",
        marca: "Nissan",
        modelo: "Versa"
    },
    {
        placa: "12345678",
        marca: "Volkswagen",
        modelo: "Sedan"
    }
]

/* ----------------------------------- GET ---------------------------------- */

app.get("/carros", (req, res) => {
    res.json({carros: carros})
})


app.get("/carros/:placa", (req, res) => {
    carro = carros.find((c) => c.placa == req.params.placa)
    res.json({carro: carro})
})


app.post("/carros", (req, res) => {
    let carro = {
        placa: req.body.placa,
        marca: req.body.marca,
        modelo: req.body.modelo
    }
    carros.push(carro)
    res.json({tipo:"agregar"})
})

app.listen(3000, ()=> {
    console.log("Escuchando en puerto 3000")
})