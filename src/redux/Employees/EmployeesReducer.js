
import employees from '../../utils/employees.json'
import {addEmployeeActionTypes , sortIdActionTypes, sortIdInitialActionTypes} from './EmployeesActionTypes';

const initialState = {
    employeesList: employees.employees,
    sortId:"initial"
}

export function EmployeesReducer(state=initialState, action) {
    
    switch(action.type) {
        case addEmployeeActionTypes.ADD_EMPLOYEE:
            return {
                ...state, employeesList:[...state.employeesList, action.payload]
            }

        case sortIdActionTypes.SORT_ID:
            return {
                ...state, sortId: action.payload
            }

            case sortIdInitialActionTypes.SORT_ID_INITIAL:
                return {
                    ...state, sortId: "initial"
                }

        default:
            return state
    }
}