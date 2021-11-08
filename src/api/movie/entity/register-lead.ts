export default function buildMakeRegisterLead(){
    return function makeRegisterLead({
      fullName = '',
      email = '',
      phone = ''
    } = {}){
      return Object.freeze({
        getFullName : () => fullName,
        getEmail : () => email,
        getPhone : () => phone
      })
    }
  }
  