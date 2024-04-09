import { useEffect, useState } from "react"
import { ObtenerEmpleados } from "../api/Empelado.tasks"
import { Presentacion } from "./Presentacion"

export function ListaEmpleados() {

    const [Empleado, setEmpleado] = useState([])

    useEffect(() => {
        async function cargarEmpleados() {
            const res = await ObtenerEmpleados()
            setEmpleado(res.data)
        }
        cargarEmpleados()
    }, [])

    return  <div className="grid grid-cols-2 gap-3">
            {Empleado.map(Empleado => (
                <Presentacion key={Empleado.id} Empleado={Empleado} />

            ))}
        </div>
}

