import axios from "axios";

export class BotController {

    static async priceDay() {
        const { data } = await axios('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
        const { USDBRL, EURBRL, BTCBRL } = data
        const priceDolar = USDBRL.bid
        const priceEuro = EURBRL.bid
        const priceBTC = BTCBRL.bid

        console.log({priceDolar, priceEuro, priceBTC})

    }
}

