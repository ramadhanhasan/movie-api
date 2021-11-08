import registerCustomer from './register-customer'
import registerLead from './register-lead'

const entityRegisterCustomer = registerCustomer()
const entityRegisterLead = registerLead()

const entity = Object.freeze({
  entityRegisterCustomer,
  entityRegisterLead
})

export {entityRegisterCustomer,entityRegisterLead}
export default entity
