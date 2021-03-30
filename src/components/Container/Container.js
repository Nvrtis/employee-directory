import React, { Component } from 'react'
import API from '../../API/API'
import Employee from '../Card/Card'

class Container extends Component {
  state = {
    employees: []
  }

  componentDidMount() {
    API.randomEmployee()
      .then(response => {
        this.setState({ 'employees': response.data.results })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="Container">
          {this.state.employees.map((employee, index) => {
            return (
              <Employee 
                key={index}
                employeeKey={index+1}
                image={employee.picture.thumbnail}
                firstName={employee.name.first}
                lastName={employee.name.last}
                phone={employee.phone}
                email={employee.email}
              />
            )
          })}
      </div>
    )
  }
}

export default Container