import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { asignarCorreoElectronico } from '../api/Empelado.tasks';

 export function CorreoForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Llamar a la función asignarCorreoElectronico de la API
      await asignarCorreoElectronico(id, correoElectronico);
      // Redirigir a la página de empleados después de asignar el correo electrónico
      navigate('/Empleado');
    } catch (error) {
      // Manejar errores, si los hay
      setError('Hubo un error al asignar el correo electrónico.');
    }
  };

  return (
    <div>
      <h2>Formulario para Asignar Correo Electrónico</h2>
      <p>Empleado ID: {id}</p>
      {/* Formulario para ingresar el correo electrónico */}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          placeholder="Correo Electrónico" 
          value={correoElectronico}
          onChange={(e) => setCorreoElectronico(e.target.value)}
          required 
        />
        <button type="submit">Guardar</button>
      </form>
      {/* Mostrar mensaje de error, si lo hay */}
      {error && <p>{error}</p>}
    </div>
  );
}

