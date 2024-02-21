import express from 'express'
import { PrismaClient } from "@prisma/client";

const app = express()
const prisma = new PrismaClient({
    log: ['query']
})

/* 
    Query: ?page=2&sort=title
    Route: /ads/{id}, /posts/como-criar-api-em-node
    Body: safe and sensible info
*/

// List games with ads counting
app.get('/games', async (request, response) => {
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })


    return response.json([games])
})

// Creation new ad
app.post('/ads', (request, response) => {
    return response.status(201).json([])
})

// List ads by game
app.get('/games/:id/ads', async (request, response) => {
    const gameId = request.params.id;
    
    // query to retrive ads without some attributes
    const ads = await prisma.ad.findMany({
        select: {
            id: true,
            name: true,
            weekDays: true,
            useVoiceChannel: true,
            yearsPlaying: true,
            hourStart: true,
            hourEnd: true,
        },
        where: {
            gameId,
        },
        orderBy: {
            createdAt: 'desc'
        }
    })

    // format before return
    return response.json(ads.map(ad => {
        return {
            ...ads,
            weekDays: ad.weekDays.split(',')
        }
    }));
})

// Search discord by ads ID
app.get('/ads/:id/discord', async (request, response) => {
    const adId = request.params.id;

    const ad = await prisma.ad.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })
    
    return response.json({
        discord: ad.discord,
    })
})

app.listen(3333)   