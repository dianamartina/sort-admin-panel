import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {addEmployeeAction} from '../../redux/Employees/EmployeesAction';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName:'',
          lastName:'',
          job:'',
          salary:'',
          date: new Date().toJSON().slice(0,10)
        };
      }

    handleFirstName(event) {
        this.setState({firstName: event.target.value});
    }
    handleLastName(event) {
        this.setState({lastName: event.target.value});
    }
    handleJob(event) {
        this.setState({job: event.target.value});
    }
    handleSalary(event) {
        this.setState({salary: event.target.value});
    }
    handleDate(event) {
        this.setState({date: event.target.value});
    }

    render() {
        
        const {firstName, lastName, job, salary, date} = this.state;
        const employee = { firstName, lastName, job, salary, date };
        const {submitAddEmployee} = this.props;

        return (
        
            <div className="home container-min-width">
                <h1 className="my-4 bg-white h4 ">Employees add form</h1>
                <form 
                    className="add-form" 
                    onSubmit={(event) => { 
                        submitAddEmployee(event, employee); 
                        this.setState({ firstName:'', lastName:'', job:'', salary:'', date: new Date().toJSON().slice(0,10) });
                    }}
                >
                    <span className="add-input-label">
                        <label htmlFor="firstName">First Name:</label>
                        <input 
                            type="text" name="firstName" id="firstName" value={firstName}
                            onChange={(event) => this.handleFirstName(event)}/>
                    </span>
                    
                    <span className="add-input-label">
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" name="lastName" id="lastName" value={lastName} 
                        onChange={(event) => this.handleLastName(event)}/>
                    </span>

                    <span className="add-input-label">
                        <label htmlFor="job">Job:</label>
                        <input type="text" name="job" id="job" value={job} 
                        onChange={(event) => this.handleJob(event)}/>
                    </span>

                    <span className="add-input-label">
                        <label htmlFor="salary">Salary &euro;:</label>
                        <input type="text" name="salary" id="salary" value={salary} 
                        onChange={(event) => this.handleSalary(event)} />
                    </span>

                    <span className="add-input-label">
                        <label htmlFor="date">Date:</label>
                        <input type="date" name="date" id="date" value={date} 
                        onChange={(event) => this.handleDate(event)}/>
                    </span>
                    
                    <button className="btn btn-dark mt-2" type="submit" >Submit form</button>
                </form>
                <Link to="/people" ><button className="btn btn-secondary mt-4" >Go to employees list</button>
                </Link>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        submitAddEmployee: (event, employee) => {
            dispatch(addEmployeeAction(event, employee))
        }
    };
  }

export default connect(null, mapDispatchToProps)(Home);