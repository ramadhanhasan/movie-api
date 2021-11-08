import express from 'express';
import cors from 'cors'

import movie from './movie'

const app = express()

app.use(cors())


app.use('/movie',movie)
app.get('/health-check',function(req,res){
    res.send();
})


export default app
