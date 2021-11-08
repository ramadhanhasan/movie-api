export default function makeUsecaseGetMovies({middlewareOmdbApi}){
  return async function usecaseGetMovies(body){
    try{

      let param = ''
      if(!body.search){
        throw new Error ('search required')
      }else{
        param += '&s='+body.search
      }

      if(!body.page){
        throw new Error ('page required')
      }else{
        param += '&page='+body.page
      }

      const getMovies = await middlewareOmdbApi.getMovies(param)
      
      return getMovies

    }catch(error){
      throw ({
        error         : error.message,
        status        : false,
        response_code : 400
      })
    }
  }
}
