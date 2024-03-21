import axios from 'axios'

const BASE_URL = 'https://j10c206.p.ssafy.io'

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const authRequest = axios.create({
  baseURL: BASE_URL,
})
