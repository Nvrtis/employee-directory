import React , { useState, useEffect  } from "react";
import './App.css';
import Header from "./components/Header/Header"
import Container from "./components/Container/Container"
import CardList from "./components/CardList/CardList"
import axios from 'axios'


function App() {
    const [employeeInfo, setEmployeeInfo] = useState([]);

      useEffect(() => {
        search()
    }, [])
    

    
    const search = async() => {
        const res = await axios('https://randomuser.me/api/?results=20')
        // console.log(res.data.results)
        setEmployeeInfo([

          res.data.results
        ]
        )
    }


    // console.log(employeeInfo)

  return (
    <div>
    <Header/>
    <Container>
        <CardList data={employeeInfo}/>
      </Container>
    </div>

  );
}

export default App;
