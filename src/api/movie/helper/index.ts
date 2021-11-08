import common from './common-helper'
import validation from './validation-helper'

import {userDb} from '../data-access'

const commonHelper = common({userDb})
const validationHelper = validation({})
const helper = Object.freeze({
  commonHelper,
  validationHelper
})

export{commonHelper,validationHelper}
export default helper
