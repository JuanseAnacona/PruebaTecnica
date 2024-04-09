import { Link } from "react-router-dom"

export function Navigation() {
  return (
    <div className="flex justify-between py-3">
        <Link to="/Empleado">
          <h1 className="font-bold text-3xl mb-4">Empleados</h1></Link>
        
        <Link to= "/Empleado-crear">
        <button className="bg-indigo-500 px-3 py-2 rounded-lg">Crear Empleado</button>
          </Link>

        

    </div>
  )
}

