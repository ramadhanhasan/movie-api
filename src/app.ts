import express from 'express'
import api from './api'

const app = express()

app.use('/api',api)
app.listen(5000,()=> console.log('server run'));
