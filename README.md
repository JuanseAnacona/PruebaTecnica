# PruebaTecnica
 
Sistema de Gestión de Empleados
Este proyecto es un sistema de gestión de empleados desarrollado en Django, que permite almacenar información sobre los empleados de una empresa, incluyendo sus datos personales, información de contacto y detalles laborales.

Instalación
Clona este repositorio en tu máquina local:

https://github.com/JuanseAnacona/PruebaTecnica

Instala las dependencias necesarias utilizando pip:

pip install -r requirements.txt

Realiza las migraciones de la base de datos:

python manage.py makemigrations
python manage.py migrate

Inicia el servidor de desarrollo:

python manage.py runserver

Uso
Crear un Nuevo Empleado
Accede al panel de administración en http://localhost:8000/admin.
Inicia sesión con tus credenciales de administrador.
Navega a la sección de "Empleados" y haz clic en "Agregar Empleado".
Completa el formulario con la información del nuevo empleado y haz clic en "Guardar".
Actualizar Información de Empleado
Desde el panel de administración, encuentra al empleado que deseas actualizar.
Haz clic en el enlace correspondiente al empleado.
Realiza los cambios necesarios en el formulario y haz clic en "Guardar".
Eliminar Empleado
Desde el panel de administración, encuentra al empleado que deseas eliminar.
Selecciona el empleado haciendo clic en la casilla de verificación junto a su nombre.
En el menú desplegable de "Acciones", elige "Eliminar" y confirma la acción.


El frontend del proyecto CRUD API está construido utilizando React, una biblioteca de JavaScript para crear interfaces de usuario. Aquí se describen los principales componentes y funcionalidades del frontend.

Componentes Principales
1. EmpleadoForm.jsx
Este componente representa un formulario para crear o actualizar empleados. Utiliza react-hook-form para gestionar el estado del formulario y realizar validaciones. Se comunica con el backend a través de funciones proporcionadas por Empleado.tasks.js para realizar operaciones CRUD en la API.

2. Empleado.jsx
Este componente muestra una lista de empleados. Utiliza la función ObtenerEmpleados de Empleado.tasks.js para obtener los datos de la API y luego muestra cada empleado utilizando el componente Presentacion.jsx.

3. Navigation.jsx
Este componente es una barra de navegación que proporciona enlaces a diferentes partes de la aplicación, como la lista de empleados y el formulario para crear nuevos empleados.

4. Presentacion.jsx
Este componente representa la presentación de un empleado en la lista. Muestra información básica sobre cada empleado y proporciona un enlace para editar o eliminar el empleado.

Funcionalidades Principales
Creación de Empleados: El formulario EmpleadoForm.jsx permite a los usuarios crear nuevos empleados proporcionando la información requerida. Utiliza la función crearEmpleado de Empleado.tasks.js para enviar los datos al backend.

Actualización de Empleados: El formulario también se utiliza para actualizar empleados existentes. Al abrir el formulario con un empleado existente, se carga automáticamente la información del empleado y permite al usuario editarla. La función actualizarEmpleado de Empleado.tasks.js se utiliza para enviar los datos actualizados al backend.

Eliminación de Empleados: En la lista de empleados (Empleado.jsx), cada empleado tiene un botón de "Borrar" que permite a los usuarios eliminar ese empleado. Utiliza la función borrarEmpleado de Empleado.tasks.js para eliminar el empleado de la base de datos.

Interacción con la API
El frontend se comunica con el backend a través de la API REST proporcionada por Django. Utiliza las funciones definidas en Empleado.tasks.js para realizar operaciones CRUD en los recursos de empleados, como crear, obtener, actualizar y eliminar empleados.

Enrutamiento
El enrutamiento en el frontend se gestiona mediante react-router-dom. Define las rutas para cada componente y proporciona navegación entre las diferentes partes de la aplicación.

para iniciar el frontend se utiliza el siguiente comando en la terminal de node:

npm run dev
