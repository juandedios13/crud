import './style/Form.css'
const Tabla = ({dataForm = [] }) => {

    const handleSeleccionar = ()=>{}

    return (
        <div className="containerTable">
            <table className="table">
                <thead className="thead">
                    <tr className="trTable trThead">
                        <th >Nombre</th>
                        <th>apellido</th>
                        <th>Cedula</th>
                        <th>Numero</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {
                         dataForm.map((e)=>{
                             return(
                                <tr className="trTable trTbody" key={e.cedula}>
                                    <td className="tdTbody">{e.nombre}</td>
                                    <td className="tdTbody">{e.apellido}</td>
                                    <td className="tdTbody">{e.cedula}</td>
                                    <td className="tdTbody">{e.numero}</td>
                                    <td className="tdTbody  tdBodyBtn"> <button className="btnSelecionar" value="Seleccionar" onClick={handleSeleccionar} type="submit" >Seleccionar</button>  </td>
                                </tr>
                            )
                                
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

Tabla.propTypes = {

}

export default Tabla
