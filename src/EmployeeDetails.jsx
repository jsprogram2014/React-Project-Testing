import React, { Component } from "react";

class EmployeeDetails extends Component {
  state = { emp_id: "", emp_name: "" }

  handleInputChange = (event) => {
    const {name,value}=event.target;
    this.setState({[name]:value})
    
  }

  render() {
    const { emp_id, emp_name } = this.state;
    const {employee_designation}= this.props;
    console.log(emp_id)
    return (
      <div>
        <input type="text" name="emp_id" value={emp_id} placeholder="Enter your ID" onChange={this.handleInputChange} />
        <input type="text" name="emp_name" value={emp_name} placeholder="Enter your Name" onChange={this.handleInputChange} />
        {/* <input type="text" name="employee_designation" value={employee_designation}/> */}
        <button onClick={() => {
          alert(`Employee ID: ${emp_id},Employee Name: ${emp_name}, Employee Designation: ${employee_designation}`)

        }}>Submit</button>
      </div>
    );

  }
}

export default EmployeeDetails;
