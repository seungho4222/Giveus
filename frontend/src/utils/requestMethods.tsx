import axios from 'axios'

const BASE_URL = 'https://localhost:8080'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const authRequest = axios.create({
  baseURL: BASE_URL,
})
