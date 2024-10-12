
# API de Gestión de Usuarios - Refactorización con TypeScript

Esta API permite crear, listar, actualizar y eliminar usuarios. Está desarrollada con **Node.js**, **Express**, **TypeScript** y utiliza **JSON Web Tokens (JWT)** para la autenticación. Esta versión ha sido refactorizada para agregar validaciones de tipos mediante TypeScript.

## Requerimientos

- [Node.js](https://nodejs.org) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Jher42/HojadeTrabajo7.git
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd HojadeTrabajo7
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Configuración de Variables de Entorno

Copia el archivo `example.env` a `.env` y configura las variables de entorno:
```env
JWT_SECRET=tu_clave_secreta
JWT_EXPIRES_IN=30s
PORT=3000
```

## Compilación y Ejecución

### Compilar TypeScript
1. Para compilar el proyecto, usa el siguiente comando:
   ```bash
   npm run build
   ```

2. Para ejecutar la API, primero compila el código y luego ejecuta:
   ```bash
   npm start
   ```

### Desarrollo
- Para ejecutar el proyecto en modo desarrollo (con recarga automática):
   ```bash
   npm run dev
   ```

### Modo producción
- Para ejecutar en modo producción:
   ```bash
   npm start
   ```

## Endpoints

### **POST /users**
- **Descripción**: Crea un nuevo usuario.
- **Validación**: El cuerpo de la solicitud debe cumplir con la interfaz `User` (name, email, password, dpi).
- **Ejemplo de solicitud**:
   ```json
   {
     "name": "Juan Pérez",
     "email": "juan@example.com",
     "password": "miPassword123",
     "dpi": "123456789"
   }
   ```
- **Respuesta**:
   - **201 Created**: Si el usuario fue creado exitosamente.
   - **400 Bad Request**: Si el DPI ya está registrado.

### **GET /users**
- **Descripción**: Lista todos los usuarios registrados.
- **Respuesta**:
   - **200 OK**: Retorna un array de usuarios.

### **PUT /users/:dpi**
- **Descripción**: Actualiza un usuario existente.
- **Validación**: El cuerpo de la solicitud debe cumplir con la interfaz `User`.
- **Ejemplo de solicitud**:
   ```json
   {
     "name": "Juan Actualizado",
     "email": "juanactualizado@example.com",
     "password": "nuevoPassword123"
   }
   ```
- **Respuesta**:
   - **200 OK**: Si el usuario fue actualizado exitosamente.
   - **404 Not Found**: Si no se encuentra un usuario con el DPI proporcionado.
   - **400 Bad Request**: Si se intenta cambiar el DPI a uno ya registrado.

### **DELETE /users/:dpi**
- **Descripción**: Elimina un usuario por su DPI.
- **Respuesta**:
   - **204 No Content**: Si el usuario fue eliminado exitosamente.
   - **404 Not Found**: Si no se encuentra un usuario con el DPI proporcionado.

## Migración del Sistema de Autenticación JWT

La autenticación con JWT ha sido adaptada para utilizar TypeScript. El token JWT se valida correctamente con las interfaces definidas.

## Despliegue en Render

La API está desplegada en Render y es accesible en la siguiente URL:
https://hojadetrabajo8.onrender.com
## Documentación de la API

1. **POST /users** - Crear usuario.
2. **GET /users** - Listar usuarios.
3. **PUT /users/:dpi** - Actualizar usuario.
4. **DELETE /users/:dpi** - Eliminar usuario.

## Instrucciones para ejecutar la API localmente

1. Clonar el repositorio.
2. Configurar las variables de entorno como se especifica.
3. Ejecutar `npm run build` y luego `npm start` para levantar el servidor.
