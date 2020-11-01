const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HiT6pCHD3lDyxSDT95zwpMdvXiDxwf8SnnDpXCam7s84pdijHh9vSF3u0gjbAqltmgKSnGNLCGeEArobpUj5iBj00xoE3rNi2')

// API

// App config
const app = express()

// Middlewares
app.use(cors({ origin: true }))
app.use(express.json())

// API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total

    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'eur'
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-665e0/us-central1/api