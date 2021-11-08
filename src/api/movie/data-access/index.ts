import {mysqlConnection, mysqlSlaveConnection} from '../../../api/database'

import makeMovieDb from './movie-db'

const movieDb = makeMovieDb({ mysqlConnection, mysqlSlaveConnection })
const database = Object.freeze({
  movieDb,
})

export { movieDb }
export default database
