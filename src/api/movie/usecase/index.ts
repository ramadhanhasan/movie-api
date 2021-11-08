//#entity import
import {entityRegisterCustomer,entityRegisterLead} from '../entity'

import makeUsecaseGetMovies from './get-movies'
import makeUsecaseGetDetailMovie from './get-detail-movie'

//# database import
import { movieDb } from '../data-access'

//#middleware import
import { middlewareOmdbApi } from '../middleware'

const usecaseGetMovies = makeUsecaseGetMovies({middlewareOmdbApi})
const usecaseGetDetailMovie = makeUsecaseGetDetailMovie({middlewareOmdbApi})

const usecase = Object.freeze({
  usecaseGetMovies,
  usecaseGetDetailMovie,
})

export{
  usecaseGetMovies,
  usecaseGetDetailMovie,
}
export default usecase
