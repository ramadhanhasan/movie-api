import middlewareOmdbApiServices from './omdbApi'

const middlewareOmdbApi = middlewareOmdbApiServices({})

const middleware = Object.freeze({
  middlewareOmdbApi,
})

export{ middlewareOmdbApi }
export default middleware
