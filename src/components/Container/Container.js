import React, { Component } from 'react'
import API from '../../utils/API'
import Card from '../Card/Card'
import Sort from '../Sort/Sort'

class Container extends Component {
    state = {
        employees: [],
        filtert: []
    }

  componentDidMount() {
    API.randomEmployee()
      .then(response => {
        this.setState({ ...this.state, 'employees': response.data.results })
      })
      .catch(err => console.log(err))
  }
 
  handleButtonChange= () => {
    this.setState({...this.state, 'filtert': this.state.employees.sort((a, b)=>{
        if(a.name.first < b.name.first) { return -1; }
        if(a.name.first > b.name.first) { return 1; }
        return 0;
        })

    }
    ) 
    console.log(this.state.filtert)
} 


  render() {
    return (
      <div className="Container">
          <Sort
          handleButtonChange = {this.handleButtonChange}/>
          {this.state.employees.map((employee, index) => {
            return (
              <Card
                key={index}
                employeeKey={index+1}
                image={employee.picture.medium}
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