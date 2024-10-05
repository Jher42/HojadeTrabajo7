Aquí tienes el contenido completo del README en un solo bloque, listo para que lo copies y pegues en tu archivo `README.md`:

# API de Gestión de Usuarios

Esta API permite crear, listar, actualizar y eliminar usuarios. Está desarrollada con **Node.js** y **Express** y utiliza **JSON Web Tokens (JWT)** para la autenticación.

## Requerimientos

- [Node.js](https://nodejs.org) (versión 14 o superior)
- [npm](https://www.npmjs.com/) (gestor de paquetes de Node.js)

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Jher42/HojadeTrabajo6
   ```
2. Navega a la carpeta del proyecto:
   ```bash
   cd HojadeTrabajo6
   ```
3. Ejecuta el siguiente comando para instalar las dependencias:
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

## Ejecutar la API

- Para ejecutar en modo desarrollo (con recarga automática):
   ```bash
   npm run dev
   ```

- Para ejecutar en modo producción:
   ```bash
   npm start
   ```

## Endpoints

### **POST /users**
- **Descripción**: Crea un nuevo usuario.
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

## Despliegue en Render

La API está desplegada en Render y es accesible en la siguiente URL:
- [https://hojadetrabajo6-jvu3.onrender.com/](https://hojadetrabajo6-jvu3.onrender.com/)

## Documentación de la API

Incluye ejemplos de solicitudes y respuestas:

1. **POST /users** - Crear usuario.
2. **GET /users** - Listar usuarios.
3. **PUT /users/:dpi** - Actualizar usuario.
4. **DELETE /users/:dpi** - Eliminar usuario.
```

### Instrucciones:
- Simplemente copia todo el texto anterior y pégalo en un archivo llamado **`README.md`** en la raíz de tu proyecto.
- Asegúrate de ajustar cualquier dato específico que quieras incluir antes de guardarlo y subirlo a tu repositorio en GitHub.

Si necesitas más cambios o algo más específico, ¡hazmelo saber!
