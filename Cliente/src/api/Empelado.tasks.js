import axios from "axios"
import { Empleado } from "../pages/Empleado"


const apiEmpleados = axios.create({
    baseURL : "http://127.0.0.1:8000/SGP/v1/empleado/empleado/"
})

export const ObtenerEmpleados = () => {
    return apiEmpleados.get("/")
}

export const unicoEmpleado = (id) => apiEmpleados.get(`/${id}/`)

export const crearEmpleado = (empleado) =>{
    return apiEmpleados.post("/", empleado)
}



export const borrarEmpleado = (id) => apiEmpleados.delete(`/${id} `)

export const actualizarEmpelado = (id, empleado) => apiEmpleados.put(`/${id}/`,empleado)

export const asignarCorreoElectronico = (idEmpleado, correoElectronico) => {
    return axios.post(`http://127.0.0.1:8000/SGP/v1/empleado/${idEmpleado}/email/`, { email: correoElectronico })}