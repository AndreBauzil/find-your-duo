import express from 'express'

const app = express()

// localhost:3333/ads

app.get('/ads', (request, response) => {
    return response.json('Acessou Ads');
})

app.listen(3333)  