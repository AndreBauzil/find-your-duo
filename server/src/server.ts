import express from 'express'

const app = express()

/* 
    Query: ?page=2&sort=title
    Route: /ads/{id}, /posts/como-criar-api-em-node
    Body: safe and sensible info
*/

// Listagem de games com contagem de anúncios
app.get('/games', (request, response) => {
    return response.json([])
})
// Criação de novo anúncio
app.post('/ads', (request, response) => {
    return response.status(201).json([])
})
// Listagem de anúncios por game
app.get('/games/:id/ads', (request, response) => {
    const gameId = request.params.id;
    
    return response.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
        { id: 4, name: 'Anuncio 4' },
    ]);
})
// Buscar discord pelo ID do anúncio
app.get('/ads/:id/discord', (request, response) => {
    const adId = request.params.id;
    
    return response.json([])
})

app.listen(3333)   