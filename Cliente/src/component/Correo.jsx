import React from 'react';
import { useParams } from 'react-router-dom';

function CorreoForm() {
  const { id } = useParams();

  // Aquí puedes implementar el formulario para asignar un correo electrónico al empleado con el ID proporcionado

  return (
    <div>
      <h2>Formulario para Asignar Correo Electrónico</h2>
      <p>Empleado ID: {id}</p>
      {/* Implementa el formulario aquí */}
    </div>
  );
}

export default CorreoForm;