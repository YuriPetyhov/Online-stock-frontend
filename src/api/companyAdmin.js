import createRest from './api'
import {COMPANY_ADMIN, COMPANY_ADMINS} from '../actions/types'

export const {
    add: addCompanyAdmin,
    getAll: getCompanyAdmins,
    get: getCompanyAdmin,
    edit: editCompanyAdmin
} = createRest('api/companyadmins/', COMPANY_ADMIN, COMPANY_ADMINS)