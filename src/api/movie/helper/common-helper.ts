
var CryptoJS = require("crypto-js");
import bcrypt from 'bcrypt'
require('dotenv').config();


export default function makeCommonHelper({userDb}){
    return Object.freeze({
        generateReferralId,
        generateBcryptPassword,
        generateRandomString,
        hashPasswordUserCustomer,
        hashPasswordAdminBrand,
        hashPasswordSuperAdmin
    })

    async function generateReferralId(name){
       return new Promise(async function(resolve,reject){
         name = name.replace(/\s/g, '');
         let stringRandom = Math.random().toString(20).substr(2,4)
         let result = name.substr(0,4)+stringRandom
         let checkRefId = await userDb.checkUserRef(result)

         if(checkRefId.length > 0){
           return generateReferralId
         }else{
           resolve(result)
         }
       })
    }
    async function hashPasswordUserCustomer(password){
      return new Promise(async function(resolve,reject){
        let secretKey = process.env.SECRET_KEY_USER_CUSTOMER
        let ciphertext = CryptoJS.AES.encrypt(password, secretKey ).toString();
        resolve(ciphertext)
      })
    }

    async function hashPasswordAdminBrand(password){
      return new Promise(async function(resolve,reject){
        let secretKey = process.env.SECRET_KEY_ADMIN_BRAND
        let ciphertext = CryptoJS.AES.encrypt(password, secretKey ).toString();
        resolve(ciphertext)
      })
    }

    async function hashPasswordSuperAdmin(password){
      return new Promise(async function(resolve,reject){
        let secretKey = process.env.SECRET_KEY_SUPER_ADMIN
        let ciphertext = CryptoJS.AES.encrypt(password, secretKey ).toString();
        resolve(ciphertext)
      })
    }

    async function generateBcryptPassword(password){
      return new Promise(async function(resolve,reject){
        const saltRounds = 10
        const hashPassword = await bcrypt.hash(password, saltRounds).then(function(hash) {
          return hash
        })
        resolve(hashPassword)
      })
    }

    async function generateRandomString(){
      return new Promise(async function(resolve,reject){
        resolve(Math.random().toString(36).substr(2,30))
      })
    }

  }
