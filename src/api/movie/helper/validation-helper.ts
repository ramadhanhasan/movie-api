// import validator from 'validator'
import {Validator} from 'node-input-validator'
export default function makeValidationHelper({}){
  return Object.freeze({
    dataRegisterCustomer,
    dataCheckMailAdminBrand,
    reconfirmInputValidation,
    dataRegisterLead,
    dataUpdateProfile
  })

  async function dataRegisterLead(data){
    return new Promise(async function(resolve,reject){
      const v = new Validator(data,{
        fullName : 'required',
        email    : 'required|email',
        phone    : 'required'
      });

      v.check().then((matched)=>{
        if (!matched) {
           const error = v.errors
           reject(new Error(error[Object.keys(error)[0]].message))
         }else{
           resolve(true)
         }
      })
    })
  }

  async function dataUpdateProfile(data){
    return new Promise(async function(resolve,reject){
      const v = new Validator(data,{
        id            : 'required|integer',
        fullName      : 'required',
        email         : 'required|email',
        password      : 'required',
        phone         : 'required',
        birthdate     : 'required|dateFormat:YYYY-MM-DD',
        gender        : 'required',
        provinceId    : 'required|integer',
        cityId        : 'required|integer',
        subdistrictId : 'required|integer',
        zipCode       : 'required|integer',
        address       : 'required'
      });

      v.check().then((matched)=>{
        if (!matched) {
           const error = v.errors
           reject(new Error(error[Object.keys(error)[0]].message))
         }else{
           resolve(true)
         }
      })
    })
  }

  async function dataRegisterCustomer(data){
    return new Promise(async function(resolve,reject){
      const v = new Validator(data,{
        fullName :'required',
        email    : 'required|email',
        password : 'required',
        phone    : 'required|integer'
      });

      v.check().then((matched)=>{
        if (!matched) {
           // console.log(v.errors)
           const error = v.errors
           reject(new Error(JSON.stringify(error)))
         }else{
           resolve(true)
         }
      })
    })
  }


  async function dataCheckMailAdminBrand(data){
    return new Promise(async function(resolve,reject){
      const v = new Validator(data,{
        email : 'required|email'
      });

      v.check().then((matched)=>{
        if (!matched) {
           // console.log(v.errors)
           const error = v.errors
           reject(new Error(JSON.stringify(error)))
         }else{
           resolve(true)
         }
      })
    })
  }

  async function reconfirmInputValidation(data){
    return new Promise(async function(resolve,reject){
      const v = new Validator(data,{
        email : 'required|email'
      });

      v.check().then((matched)=>{
        if (!matched) {
           // console.log(v.errors)
           const error = v.errors
           reject(new Error(JSON.stringify(error)))
         }else{
           resolve(true)
         }
      })
    })
  }


}
