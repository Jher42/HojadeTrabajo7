const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

let users = [];

// Endpoint para crear un usuario con contraseña encriptada
app.post('/users', async (req, res) => {
    const { name, email, password, dpi } = req.body;

    const userExists = users.find(user => user.dpi === dpi);
    if (userExists) {
        return res.status(400).json({ message: 'El DPI ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { name, email, password: hashedPassword, dpi };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Endpoint de login que genera el token JWT
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id: user.dpi }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.json({ token });
});

// Middleware para verificar el token JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'Token requerido' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.id;
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' });
    }
};

// Proteger rutas con el middleware verifyToken
app.get('/users', verifyToken, (req, res) => {
    res.json(users);
});

app.put('/users/:dpi', verifyToken, (req, res) => {
    // Lógica para actualizar un usuario...
});

app.delete('/users/:dpi', verifyToken, (req, res) => {
    // Lógica para eliminar un usuario...
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
