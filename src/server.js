import axios from 'axios'
import cron from 'node-cron'
import { BotController } from './controllers/BotController.js'



cron.schedule('*/5 * * * * *', () => {
    console.log('Teste cron')
})

cron.schedule('* * * * *', () => {
    BotController.priceDay();
})