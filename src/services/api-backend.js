import axios from 'axios'

const backend = axios.create ({baseURL: 'https://localhost:4000'})

export default backend