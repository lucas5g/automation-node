import express from 'express'
import cron from 'node-cron'
import { BotController } from './controllers/BotController.js'


const app = express()

app.get('/', (req, res) => {
    res.json({
        api: 'Automation node'
    })
})

cron.schedule('* * * * *', () => {
    console.log('Teste cron')
})

cron.schedule('0/42 * * * *', () => {
    BotController.priceDay();
})

app.listen(process.env.PORT || 8000)