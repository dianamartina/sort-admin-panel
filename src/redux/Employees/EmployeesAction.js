import {addEmployeeActionTypes, sortIdActionTypes, sortIdInitialActionTypes } from './EmployeesActionTypes';

export function  addEmployeeAction(event,payload) {
    event.preventDefault();
    return {
        type:  addEmployeeActionTypes.ADD_EMPLOYEE,
        payload
    }
}

export function  sortIdAction(event) {
    return {
        type:  sortIdActionTypes.SORT_ID,
        payload : event.target.id
    }
}

export function  sortIdInitialAction(payload) {
    return {
        type:  sortIdInitialActionTypes.SORT_ID_INITIAL,
        payload 
    }
}