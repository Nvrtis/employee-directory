import React from 'react'
import "./style.css";

function Card(employee) {
  return (
    <div className="card card-columns mx-auto d-flex justify-content-center col-12" style={{width: "18rem"}}>
      <div>{employee.employeeKey}</div>
      <img src={employee.image} className="card-img-top" alt={employee.firstName}  />
      <div className="card-body">
      <h5 className="card-title img-fluid">{employee.firstName} {employee.lastName}</h5>
      <p className="card-text">{employee.phone}</p>
      <p className="card-text">{employee.email}</p>
      <p className="card-text">{employee.location}</p>
      </div>
    </div>
  )
}

export default Card