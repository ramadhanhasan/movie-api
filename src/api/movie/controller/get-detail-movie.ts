export default function makeControllerGetDetailMovie ({usecaseGetDetailMovie}) {
    return async function controllerGetDetailMovie(httpRequest) {
      try {
        
        const bodyparam = httpRequest.query
        const posted = await usecaseGetDetailMovie(bodyparam)
  
        return {
          headers: {
            'Content-Type': 'application/json',
          },
          statusCode    : 200,
          body: {
            status      : true,
            data        : posted,
          }
        }
      } catch (e) {
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: e.response_code,
          body: {
            status : false,
            error: e.error
          }
        }
      }
    }
  }
  