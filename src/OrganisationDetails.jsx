import React from 'react'
import EmployeeDetails from './EmployeeDetails'

class OrganisationDetails extends React.Component{
    render(){
        let employee_designation='Supervisor'
        return(
            <div>
                <EmployeeDetails employee_designation={employee_designation}/>
            </div>
        )
    }
}
export default OrganisationDetails