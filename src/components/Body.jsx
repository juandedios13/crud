import React, { useEffect, useState } from 'react'
import Form from './Form'
import Tabla from './Tabla';
import './style/Body.css'

const Body = () => {

    const [dataForm, setdataForm] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/").then((e)=>{
            return e.json();
        }).then((e)=>{
            setdataForm(e);
        });
    }, [])

   

    return (
        <div className="container">
            <Form dataForm={dataForm} setdataForm={setdataForm} /> 
            <Tabla dataForm={dataForm} />
        </div>
    )
}

export default Body
