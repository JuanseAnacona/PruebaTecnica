import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Empleado } from "./pages/Empleado";
import { EmpleadoForm } from "./pages/EmpleadoForm";
import { Navigation } from "./component/Navigation";
import {Toaster} from "react-hot-toast"


function App() {
  return (
    <BrowserRouter>
      <div className="container mx-auto">
      <Navigation />
      <Routes>
        <Route path="/" element= {<Navigate to={"/Empleado"} />}   />
        <Route path="/Empleado" element={<Empleado />} />
        <Route path="/Empleado-crear" element={<EmpleadoForm />} />
        <Route path="/Empleado/:id" element={<EmpleadoForm />} />
       
        
      </Routes>
      <Toaster/>

      </div>
   
    </BrowserRouter>
  );
}

export default App