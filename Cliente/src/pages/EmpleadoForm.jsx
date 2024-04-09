import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { crearEmpleado, borrarEmpleado, actualizarEmpelado, unicoEmpleado } from "../api/Empelado.tasks"
import { useNavigate, useParams } from "react-router-dom"
import {toast} from "react-hot-toast"
import { Empleado } from "./Empleado"

export function EmpleadoForm() {

    const { register, handleSubmit, formState: {
        errors
    } ,setValue} = useForm()

    const navigate = useNavigate()
    const params = useParams()

    const onSubmit = handleSubmit(async data => {
        try {
            let nuevoEmpleadoId;
            
            if (params.id) {
                await actualizarEmpelado(params.id, data);
                toast.success("Empleado actualizado con éxito");
            } else {
                const response = await crearEmpleado(data);
                if (response && response.data && response.data.id) {
                    nuevoEmpleadoId = response.data.id;
                    toast.success("Empleado creado con éxito");
                    
                    // Redirigir a la página para asignar correo electrónico al nuevo empleado
                    navigate(`/empleado/email/${nuevoEmpleadoId}`);
                } else {
                    throw new Error("La respuesta de crearEmpleado no contiene el ID del empleado");
                }
            }
            navigate("/Empleado");
        } catch (error) {
            console.error("Error:", error);
            toast.error("Hubo un error al procesar la solicitud");
        }
    });

    useEffect(() => {
    async function cargarInformacion() {
        if(params.id) {
            const res = await unicoEmpleado(params.id)
            setValue("nombres", res.data.nombres)
            setValue("apellidos", res.data.apellidos)
            setValue("tipoIdentificacion", res.data.tipoIdentificacion)
            setValue("identificacion", res.data.identificacion)
            setValue("fechaIngreso", res.data.fechaIngreso)
            setValue("salarioMensual", res.data.salarioMensual)
            setValue("cargo", res.data.cargo)
            setValue("departamento", res.data.departamento)
            

        }}
        cargarInformacion()
    }, [])
    return (
        <div className="max-w-wl max-auto">

            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Nombres" {...register("nombres", { required: true })} className="text-black bg-white p-3 rounden-lg block w-full mb-3"></input>
                {errors.nombres && <span>El nombre es requerido</span>}
                <input type="text" placeholder="Apellidos" {...register("apellidos", { required: true })} className="text-black bg-white p-3 rounden-lg block w-full mb-3" ></input>
                {errors.apellidos && <span>El apellido es requerido</span>}
                <select name="Tipo de Documento" {...register("tipoIdentificacion", { required: true })}className="text-black bg-white p-3 rounden-lg block w-full mb-3">
                    <option>nit</option>
                    <option>cc</option>
                </select>
                <input type="number" placeholder="Numero de identificacion" {...register("identificacion", { required: true })} className="text-black bg-white p-3 rounden-lg block w-full mb-3"></input>
                {errors.identificacion && <span>El numero de identificacion es requerido</span>}
                <input type="date" name="Fecha de ingreso" {...register("fechaIngreso", { required: true })} className="text-black bg-white p-3 rounden-lg block w-full mb-3"></input>
                {errors.fechaIngreso && <span>La fecha de ingreso es requerida</span>}
                <input type="number" placeholder="Salario Mensual" {...register("salarioMensual", { required: true })} className="text-black bg-white p-3 rounden-lg block w-full mb-3"></input>
                {errors.salarioMensual && <span>El salario mensual es requerido</span>}
                <input type="text" placeholder="Cargo" {...register("cargo", { required: true })} className="text-black bg-white p-3 rounden-lg block w-full mb-3"></input>
                {errors.cargo && <span>El cargo es requerido</span>}
                <input type="text" placeholder="Departamento" {...register("departamento", { required: true })} className="text-black bg-white p-3 rounden-lg block w-full mb-3"></input>
                {errors.departamento && <span>El departamento es requerido</span>}

                <button className="bg-indigo-500 px-3 py-2 rounded-lg">Guardar</button>

            </form>

            {params.id && <button className="bg-red-600 p-3 rounded-lg w-50 mt-4" onClick={async () => {
                const aceptar = window.confirm("Estas seguro?")
                if (aceptar) {
                    await borrarEmpleado(params.id)
                    toast.success("Empleado eliminado con exito")
                    navigate("/Empleado")
                }
            }

            }>Borrar</button>}

        </div>
    )
}