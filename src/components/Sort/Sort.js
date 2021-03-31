import React from 'react'
import "./style.css";

const Sort = (props) => {

return(
        <button className="Sorter" onClick={props.handleButtonChange}>Sort By Name</button>
)

}

export default Sort