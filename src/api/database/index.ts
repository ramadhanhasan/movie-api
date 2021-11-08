import mysql from 'mysql'
require('dotenv').config();

let environment = process.env.ENVIRONMENT!.toLowerCase()
console.log(environment)
const dbHost = ((environment === 'production') ? process.env.DB_HOST_PROD : process.env.DB_HOST_DEV)
const dbUser = ((environment === 'production') ? process.env.DB_USER_PROD : process.env.DB_USER_DEV)
const dbPassword = ((environment === 'production') ? process.env.DB_PASSWORD_PROD : process.env.DB_PASSWORD_DEV)
const dbName = ((environment === 'production') ? process.env.DB_DATABASE_PROD : process.env.DB_DATABASE_DEV)

const dbSlaveHost = ((environment === 'production') ? process.env.SLAVE_DB_HOST_PROD : process.env.SLAVE_DB_HOST_DEV)
const dbSlaveUser = ((environment === 'production') ? process.env.SLAVE_DB_USER_PROD : process.env.SLAVE_DB_USER_DEV)
const dbSlavePassword = ((environment === 'production') ? process.env.SLAVE_DB_PASSWORD_PROD : process.env.SLAVE_DB_PASSWORD_DEV)
const dbSlaveName = ((environment === 'production') ? process.env.SLAVE_DB_DATABASE_PROD : process.env.SLAVE_DB_DATABASE_DEV)

console.log(dbHost)

const mysqlConnection = mysql.createPool({
  connectionLimit : 10,
  host : dbHost ,
  user : dbUser,
  password : dbPassword,
  database : dbName,
  multipleStatements : true,
  timezone : 'Asia/Jakarta'
})

const mysqlSlaveConnection = mysql.createPool({
  connectionLimit : 10,
  host : dbHost ,
  user : dbUser,
  password : dbPassword,
  database : dbName,
  multipleStatements : true,
  timezone : 'Asia/Jakarta'
})

mysqlConnection.getConnection((err, conn) => {
    if (!err)
        console.log('DB koneksi sukses');
    else
        console.log('DB koneksi error : ' + JSON.stringify(err,undefined, 2));
});

mysqlSlaveConnection.getConnection((err, conn) => {
    if (!err)
        console.log('DB koneksi sukses slave');
    else
        console.log('DB koneksi error : ' + JSON.stringify(err,undefined, 2));
});

const databaseConfig = Object.freeze({
  mysqlConnection,
  mysqlSlaveConnection
})

export default databaseConfig
export{mysqlConnection, mysqlSlaveConnection}
