import axios from 'axios'

const moedasApi = axios.create ({baseURL: 'https://economia.awesomeapi.com.br/json/all'})

export default moedasApi