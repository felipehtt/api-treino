import express from "express";

const servidor = express()

servidor.get('calcular/dividir/:n1/:n2', (req, resp) => {

    let n1 = Number(req.params.n1)
    let n2 = Number(req.params.n2)

    let div = (n1 / n2)

    resp.send(`a divisão do número ${n1} com o número ${n2} é : ${div}`)
})

servidor.listen(5050, () => console.log('API subiu nessa porta do 5050'))