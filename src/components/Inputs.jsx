import React from 'react'
import PropTypes from 'prop-types'
import './style/Form.css'

const Inputs = ({val, name,type,handleDatos}) => {
    return (
        <div className="divFormInput">  
            <label className="labelFormInput">
                {name}{": "} 
            </label>
            <input className="inputForm" name={name} value={val}  type={type} onChange={handleDatos} placeholder={name} ></input>
        </div>
    )
}

Inputs.propTypes = {
 name: PropTypes.string,
 type: PropTypes.string,
 handleDatos: PropTypes.func
}

export default Inputs
