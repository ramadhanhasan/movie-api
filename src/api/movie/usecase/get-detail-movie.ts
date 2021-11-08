export default function makeUsecaseGetDetailMovie({middlewareOmdbApi}){
    return async function usecaseGetDetailMovie(body){
      try{
        
        let param = ''
        if(!body.id){
          throw new Error ('ID required')
        }else{
          param += '&i='+body.id
        }

        const detailMovie = await middlewareOmdbApi.detailMovie(param)
        
        return detailMovie
  
      }catch(error){
        throw ({
          error         : error.message,
          status        : false,
          response_code : 400
        })
      }
    }
  }
  