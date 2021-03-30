import React from "react";
import Card from "../Card/Card";


function CardList ({ data }) {
    return (
        data.map((employee, index) => {

            console.log(employee)

            return (
                <Card        
                    key={index}
                    // image={employee.picture.medium}
                    name={employee.name}
                    gender={employee.gender}
                    email={employee.email}
                    phone={employee.cell}
                />

            )
        }

            )
    )
}

export default CardList;