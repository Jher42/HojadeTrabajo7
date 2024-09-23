
# API de Gestión de Usuarios

Esta API permite crear, listar, actualizar y eliminar usuarios. Está desarrollada con Node.js y Express.

## Requerimientos
- Node.js
- npm

## Instalación
1. Clonar el repositorio:
   ```
   git clone https://github.com/Jher42/HojadeTrabajo6
   ```
2. Ejecutar `npm install` para instalar las dependencias.

## Ejecutar la API
- Para ejecutar en modo desarrollo:
   ```
   npm run dev
   ```

- Para ejecutar en modo producción:
   ```
   npm start
   ```

## Endpoints

### POST /users
- Crea un nuevo usuario.
- Ejemplo de solicitud:
   ```json
   {
     "name": "Juan Pérez",
     "email": "juan@example.com",
     "password": "miPassword123",
     "dpi": "123456789"
   }
   ```
- Si el DPI ya está registrado, se devolverá un error.

### GET /users
- Lista todos los usuarios registrados.

### PUT /users/:dpi
- Actualiza un usuario existente.
- Ejemplo de solicitud:
   ```json
   {
     "name": "Juan Actualizado",
     "email": "juanactualizado@example.com",
     "password": "nuevoPassword123"
   }
   ```
- Si se intenta cambiar el DPI a uno ya registrado, se devolverá un error.

### DELETE /users/:dpi
- Elimina un usuario por su DPI.

## Despliegue en Render
- La API está desplegada en Render y accesible en la siguiente URL:
   [[https://hojadetrabajo6-jvu3.onrender.com/](https://hojadetrabajo6-jvu3.onrender.com/)

## Documentación de la API
Incluye ejemplos de solicitudes y respuestas.

1. **POST /users** - Crear usuario.
2. **GET /users** - Listar usuarios.
3. **PUT /users/:dpi** - Actualizar usuario.
4. **DELETE /users/:dpi** - Eliminar usuario.

## Contribuciones
Si deseas contribuir, por favor realiza un **pull request** con tus sugerencias o mejoras.
