import express  from 'express'
import bodyParser from 'body-parser';

const callback = require('./callback')
import {
  controllerGetMovies,
  controllerGetDetailMovie,
} from './controller'


const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/search',callback(controllerGetMovies))
app.get('/detail',callback(controllerGetDetailMovie))

export default app
