import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import { EmployeesReducer } from './Employees/EmployeesReducer';

const rootReducer = combineReducers({
    Employees: EmployeesReducer
})

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;