export default function makeControllerGetMovies ({usecaseGetMovies}) {
    return async function controllerGetMovies(httpRequest) {
      try {
        const bodyparam  = httpRequest.query
        const posted     = await usecaseGetMovies(bodyparam)
        
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode    : 200,
          body: {
            status      : posted.Response,
            data        : posted.Search,
            totalResults: posted.totalResults
          }
        }
      } catch (e) {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode    : e.response_code,
          body: {
            status      : false,
            error       : e.error
          }
        }
      }
    }
  }
  