import React from 'react'
import {useNavigate} from "react-router-dom"


export function Presentacion({Empleado}) {

    const navigate = useNavigate()

    return (
        <div className='bg-gray-500 p-3 hover:bg-slate-700 hover:cursor-pointer'
        
            onClick={() => {

            navigate("/Empleado/" + Empleado.id)
            
            }}
        >
            <h1 className='font-bold uppercase'>{Empleado.nombres}</h1>
            <h1 className='font-bold uppercase'>{Empleado.apellidos}</h1>
            <h1>{Empleado.tipoIdentificacion}</h1>
            <h1>{Empleado.identificacion}</h1>
            <h1>{Empleado.FechaIngreso}</h1>
            <h1>{Empleado.SalarioMensual}</h1>
            <h1>{Empleado.cargo}</h1>
            <h1>{Empleado.departamento}</h1>
        </div>
    )
}




