import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import API from '../../utils/API'
import Card from '../Card/Card'
import Sort from '../Sort/Sort'
import "./style.css";

class Container extends Component {
    // employees is our list with 20, sorted will be either by filtered by gender or sorted by name 
    state = {
        employees: [],
        sorted: [],
        filtert: ""
    }

    // mounts our state with our employees 
    componentDidMount() {
        API.randomEmployee()
            .then(response => {
                this.setState({ ...this.state, 'employees': response.data.results, "sorted": response.data.results })
            })
            .catch(err => console.log(err))
    }

    // sort our array by name
    handleButtonChange = () => {
        this.setState({
            ...this.state, "sorted": this.state.employees.sort((a, b) => {
                if (a.name.first < b.name.first) { return -1; }
                if (a.name.first > b.name.first) { return 1; }
                return 0;
            })

        }
        )
    }

    // filter our array of employees
    handleFilter = (e) => {
        if (e.target.value === "none") {
            this.setState({
                ...this.state, "filtert": this.state.employees
            })
        } else {
            this.setState({
                ...this.state, "filtert": e.target.value, "sorted": this.state.employees.filter(
                    employee => {
                        return employee.gender == e.target.value
                    })
            }
            )
        }
    }

    render() {

        return (
            <div className="Container">
                <div className="Container SearchBox">
                    <Filter
                        handleFilter={this.handleFilter}
                    />
                    <Sort
                        handleButtonChange={this.handleButtonChange} />
                </div>{
                    this.state.sorted.map((employee, index) => {
                        console.log(this.state)
                        return (
                            <Card
                                key={index}
                                employeeKey={index + 1}
                                image={employee.picture.large}
                                firstName={employee.name.first}
                                lastName={employee.name.last}
                                phone={employee.phone}
                                email={employee.email}
                            />)
                    })
                })
            </div>
        )

    }
}

export default Container