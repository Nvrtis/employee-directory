import React from 'react'
import "./style.css";

const Filter = (props) => {

return(
    <div >
       <select className="Selector" id="Gender" value="options" onChange={props.handleFilter}>
       <option value="none">None</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
    </div>
)

}

export default Filter