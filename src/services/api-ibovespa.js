import axios from 'axios'

const ibovespaApi = axios.create ({baseURL: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBOV11.SAO&apikey=CBYA7PMM41746A9X'})

export default ibovespaApi