import React , { useState, useEffect  } from "react";
import axios from 'axios'

const DataTable = () => {
    const [employeeInfo, setEmployeeInfo] = useState({
      });

      useEffect(() => {
        search()
    }, [])
    
    
    
    const search = async() => {
        const res = await axios('https://randomuser.me/api/?results=20')
        setEmployeeInfo( res.data.results)
    }
    
console.log(employeeInfo)
        return (
          <div className="container">
              <div className="row">
              </div>
          </div>
        );
  }

export default DataTable;