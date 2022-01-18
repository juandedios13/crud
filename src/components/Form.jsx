import React, {useState} from 'react';
import Inputs from './Inputs';
import './style/Form.css'

const Form = ({dataForm = [] , setdataForm}) => {

    const [dato, setdato] = useState({
        nombre:'',
        apellido:'',
        cedula:'',
        numero:'',
    });

    const handleForm = (e)=>e.preventDefault();

    const validar = (e)=>{
        if(dato.nombre != '' && dato.apellido != '' && dato.cedula != '' && dato.numero != ''){
           
            
            let datosApi = {
                method: 'post',
                body:JSON.stringify({
                    dato
                }),
                headers:{
                    'Content-Type': 'application/json'
                  }
            } 
            if(e == 0){
                datosApi.method = 'post';
                fetch("http://localhost:3000/",datosApi ).then((e)=>{
                    if(e.status === 200){
                        return e.json();     
                    }else if(e.status >= 400){
                        console.log("SOMETHING WENT WRONG")
                    }
                }).then((e)=>{
                        setdataForm(e)
                });
            }else if(e == 1){
                datosApi.method = 'put';
                fetch("http://localhost:3000/",datosApi ).then((e)=>{
                    if(e.status === 200){
                        return e.json();     
                    }else if(e.status >= 400){
                        console.log("SOMETHING WENT WRONG")
                    }
                }).then((e)=>{
                        setdataForm(e)
                });
            }else if(e == 2){
                datosApi.method = 'delete';
                fetch("http://localhost:3000/",datosApi ).then((e)=>{
                    if(e.status === 200){
                        return e.json();     
                    }else if(e.status >= 400){
                        console.log("SOMETHING WENT WRONG")
                    }
                }).then((e)=>{
                        setdataForm(e)
                });
            }
            
            setdato(
                {
                    nombre:'',
                    apellido:'',
                    cedula:'',
                    numero:'',
                }
            )
        }
    }

    const handleAgg = (e)=>{
        validar(0);
    }

    const handleUpdate = (e)=>{
        validar(1);
    }

    const handleDelete = (e)=>{
        validar(2);
    }

    

    const handleDatos = (e)=>{
        setdato({
            ...dato,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="containerForm">
            <form className="Form" onSubmit={handleForm}>
            
                <Inputs val = {dato.nombre} name="nombre"  type="text" handleDatos={handleDatos} />
                <Inputs val= {dato.apellido} name="apellido" type="text" handleDatos={handleDatos} />
                <Inputs val = {dato.cedula} name="cedula" type="text" handleDatos={handleDatos}/>
                <Inputs val = {dato.numero} name="numero" type="text" handleDatos={handleDatos}/>
                <div className="containerFromBtn">
                    <button className="btnForm" value="Agregar" onClick={handleAgg} type="submit" >Agregar</button>
                    <button className="btnForm" value="Actualizar" onClick={handleUpdate} type="submit" >Actualizar</button>
                    <button className="btnForm" value="Eliminar" onClick={handleDelete} type="submit" >Eliminar</button>
                </div>
                
            </form>
        </div>
    )
}


export default Form

