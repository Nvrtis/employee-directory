import React, { Component } from 'react'
import Filter from '../Filter/Filter'
import API from '../../utils/API'
import Card from '../Card/Card'
import Sort from '../Sort/Sort'
import "./style.css";

class Container extends Component {
    state = {
        employees: [],
        sorted: [],
        filtert: ""
    }

    componentDidMount() {
        API.randomEmployee()
            .then(response => {
                this.setState({ ...this.state, 'employees': response.data.results, "sorted": response.data.results })
            })
            .catch(err => console.log(err))
    }

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