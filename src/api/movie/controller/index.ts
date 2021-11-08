import makeControllerGetMovies from './get-movies'
import makeControllerGetDetailMovie from './get-detail-movie'

import {
  usecaseGetMovies,
  usecaseGetDetailMovie
} from '../usecase'

const controllerGetMovies = makeControllerGetMovies({usecaseGetMovies})
const controllerGetDetailMovie = makeControllerGetDetailMovie({usecaseGetDetailMovie})

const controller = Object.freeze({
  controllerGetMovies,
  controllerGetDetailMovie,
})

export{
  controllerGetMovies,
  controllerGetDetailMovie,
}

export default controller
