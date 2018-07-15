import axios from 'axios'

const envConfig = {
  production: '/api',
  development: 'http://127.0.0.1:8080/api'
}

export const baseURL = envConfig[process.env.NODE_ENV || 'development']

export const HTTP = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    common: {
      'X-Requested-With': 'XMLHttpRequest'
    },
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

