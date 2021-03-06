const express = require('express')
const cors = require('cors')
const path = require('path')

if(process.env.NODE_ENV !== 'production') require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())


if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, (err)=>{
    if(err) throw err
    console.log(`Server running on port ${port}...`)
})

app.get('/service-worker.js', (req, res)=>{
    res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'))
})

app.post('/payment', (req, res)=>{
    const body = {
        source: req.body.token.id,
        amount: req.body.amound,
        currency: 'usd'
    }

    stripe.charges.create(body, (stripeErr, stripeRes)=>{
        if(stripeErr){
            res.status(500).send({error: stripeErr})
        }else{
            res.status(200).send({succes: stripeRes})
        }
    })

})