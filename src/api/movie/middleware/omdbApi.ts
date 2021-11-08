import axios from 'axios'
const qs = require('qs')
require('dotenv').config();

export default function middlewareOmdbApiServices({}){
  return Object.freeze({
    detailMovie,
    getMovies
  })

  async function detailMovie(data){
    return new Promise (async function(resolve,reject){
      const url = process.env.BASE_URL;
      const key = process.env.KEY;
      const param = "?apikey="+key+data
      axios({
        method: 'get',
        url: url+param,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(new Error(error.response.data.error))
      });
    })
  }
  
  async function getMovies(data){
    return new Promise (async function(resolve,reject){
      const url = process.env.BASE_URL;
      const key = process.env.KEY;
      const param = "?apikey="+key+data
      console.log(param)
      axios({
        method: 'get',
        url: url+param,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then(function (response) {
        resolve(response.data)
      })
      .catch(function (error) {
        reject(new Error(error.response.data.error))
      });
    })
  }

}
