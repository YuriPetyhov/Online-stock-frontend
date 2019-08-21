import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import adminCompanyStatisticReduser from './adminsCompanyStatisticReduser';
import companiesListReduser from './companiesListReduser';
import companyReduser from './companyReduser';


export default combineReducers({
    errors: errorReducer,
    auth: authReducer,
    adminCompanyStatistic:adminCompanyStatisticReduser,
    companiesList:companiesListReduser,
    currentCompany:companyReduser
});