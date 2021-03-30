import React from "react";

function Card(employee) {
  console.log(employee)
   return (
       <div>
           {/* <img
               src={image}
               alt="employee"
           /> */}
           <p>{employee.name}</p>
           <p>{employee.gender}</p>
           <p>{employee.email}</p>
           <p>{employee.phone}</p>
       </div>
   )
}

export default Card;