export default function buildMakeRegisterCustomer(){
  return function makeRegisterCustomer({
    fullName = '',
    email = '',
    password = '',
    phone ='',
    referralId = '',
    referralFrom = 1,
    activationCode = '',
    platformId = 0
  } = {}){
    return Object.freeze({
      getFullName : () => fullName,
      getEmail : () => email,
      getPassword: () => password,
      getPhone : () => phone,
      getReferralId : () => referralId,
      getReferralFrom : () => referralFrom,
      getActivationCode : () => activationCode,
      getPlatformId : () => platformId
    })
  }
}
