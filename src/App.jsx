import React, { Component } from "react";

class StateCheck extends Component {
  state = { emp_id: "", emp_name: "" }

  handleInputChange = (event) => {
    const {name,value}=event.target;
    this.setState({[name]:value})
    
  }

  render() {
    const { emp_id, emp_name } = this.state;
    console.log(emp_id)
    return (
      <div>
        <input type="text" name="emp_id" value={emp_id} placeholder="Enter your ID" onChange={this.handleInputChange} />
        <input type="text" name="emp_name" value={emp_name} placeholder="Enter your Name" onChange={this.handleInputChange} />
        <button onClick={() => {
          alert(`Employee ID: ${emp_id},Employee Name: ${emp_name}`)

        }}>Submit</button>
      </div>
    );

  }
}

export default StateCheck;







// class SimpleClass extends Component {
//   render() {
//     return <div>Hello World</div>
//   }
// }

// export default SimpleClass