import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {sortIdAction} from '../../redux/Employees/EmployeesAction';
import {sortIdInitialAction} from '../../redux/Employees/EmployeesAction';
import './Employees.css';

function Employees (props) {

    const {employees, sortId, sortIdStore, sortIdInitial} = props;
    const employeesInitial = employees;
    let sortEmployees = [];

    if (sortIdStore === "initial") {
        sortEmployees = employeesInitial;

     } else if (sortIdStore === "sortName") {
        sortEmployees = employees.slice().sort((a, b) => (a.lastName > b.lastName) ? 1 : -1);
    
    } else if (sortIdStore === "sortSalary") {
        sortEmployees = employees.slice().sort((a, b) => Number(a.salary) - Number(b.salary));
            
    } else if (sortIdStore === "lowest") {
        sortEmployees = employees.filter(sortEmployee => sortEmployee.salary <= 2500);

    } else if (sortIdStore === "middle") {
        sortEmployees = employees.filter(sortEmployee => 2500 < sortEmployee.salary && sortEmployee.salary < 4000) ;

    }else if (sortIdStore === "heigh") {
        sortEmployees = employees.filter(sortEmployee => sortEmployee.salary >= 4000);

    } else {
        sortEmployees = employeesInitial;
    } 

    // console.log("employees", employees);
    // console.log("sortEmployees", sortEmployees);
    return (
        <div className="container container-min-width d-flex align-items-center flex-column">
            <div className="text-center">
                <h1 className="my-4 bg-white h4">Employees list</h1>
            </div>
            <div className="employees-forms row d-flex align-items-start">
                <div className="forms-filters">
                    <div className="forms-filters-no-btn">
                        <form className="form-filter ">
                            <span className="font-weight-bold mb-2">Sort:</span>
                            <div className="d-flex flex-column ">
                                <span>
                                    <input type="checkbox" id="sortName" onChange={(event) => sortId(event)} checked={sortIdStore === "sortName"}/>
                                    <label htmlFor="sortName" className="ml-1">Last Name &#8599;</label>
                                </span>
                                
                                <span>
                                    <input type="checkbox" id="sortSalary" onChange={(event) => sortId(event)} checked={sortIdStore === "sortSalary"}/>
                                    <label htmlFor="sortSalary" className="ml-1">Salary &euro; &#8599; </label>
                                </span>
                            </div>
                        </form>

                        <form className="form-filter">
                            <span className="font-weight-bold mb-2">Filter:</span>
                            <span>
                                <input type="checkbox" id="lowest" onChange={(event) => sortId(event)} checked={sortIdStore === "lowest"}/>
                                <label htmlFor="lowest" className="ml-1 ">&#60; 2500 &euro;</label>
                            </span>

                            <span>
                                <input type="checkbox" id="middle" onChange={(event) => sortId(event)} checked={sortIdStore === "middle"}/>
                                <label htmlFor="middle" className="ml-1 ">2500-4000 &euro;</label>
                            </span>

                            <span>
                                <input type="checkbox" id="heigh" onChange={(event) => sortId(event)} checked={sortIdStore === "heigh"}/>
                                <label htmlFor="heigh" className="ml-1 ">&#62; 4000 &euro;</label>
                            </span>
                        </form>

                    </div>
                    <Link to="/">
                        <button className="btn btn-secondary" onClick={(event) => sortIdInitial(event)}>Go to add form</button>
                    </Link>
                </div>
                <div className="employees-list col-lg-9 col-12 flex-grow-1 ">
                        <div className="header-list d-flex">
                            <div className="w-75 d-flex mb-3">
                                <div className="employee-item pl-2">First Name </div>
                                <div className="employee-item">Last Name</div>
                                <div className="employee-item">Job</div>
                            </div>
                            <div className="employee-item-salary">Salary &euro;</div>
                            <div className="employee-item-date">Date</div>
                        </div>
                        
                        {sortEmployees.map((employee,index) => {
                            return (
                                <div className=" employee-row d-flex" key={index}>
                                    <div className="w-75 d-flex">
                                        <div className="employee-item pl-2">{employee.firstName}</div>
                                        <div className="employee-item ">{employee.lastName}</div>
                                        <div className="employee-item ">{employee.job}</div>
                                    </div>
                                    <div className="employee-item-salary">{employee.salary}</div>
                                    <div className="employee-item-date">{employee.date}</div>
                                </div>
                            )
                        })}
                </div>
            </div>
            
        </div>
    )
}

function mapStateToProps(state) {
    console.log("DstateEmploy",state.Employees.sortId);
    return {
        employees: state.Employees.employeesList,
        sortIdStore: state.Employees.sortId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        sortId: (event, id) => {
            dispatch(sortIdAction(event, id))
        },
        sortIdInitial: (payload) => {
            dispatch(sortIdInitialAction(payload))
        }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
