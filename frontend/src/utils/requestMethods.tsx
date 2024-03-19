import axios from 'axios'

const BASE_URL = 'http://localhost:8081'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const authRequest = axios.create({
  baseURL: BASE_URL,
})
