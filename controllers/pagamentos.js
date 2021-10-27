const app = require("../config/custom-express")()


    app.get('/pagamentos', (req, res) => {
        res.send('Rota de pagamentos')
    })

    app.post('/pagamentos/pagamento', (req, res) => {
        const pagamento = req.body
        console.log(pagamento)
        res.send('OK')
    })




