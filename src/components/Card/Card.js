import React from 'react'

function Card(employee) {
  return (
    <div>
      <div className="row">{employee.employeeKey}</div>
      <img alt={employee.firstName} src={employee.image} />
      <p>{employee.firstName}</p>
      <p>{employee.lastName}</p>
      <p>{employee.phone}</p>
      <p>{employee.email}</p>
      <p>{employee.location}</p>
    </div>
  )
}

export default Card