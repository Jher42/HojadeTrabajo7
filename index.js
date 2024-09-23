const express = require('express');
const app = express();
app.use(express.json());

let users = []; 
app.post('/users', (req, res) => {
    const { name, email, password, dpi } = req.body;

    const userExists = users.find(user => user.dpi === dpi);
    if (userExists) {
        return res.status(400).json({ message: 'El DPI ya está registrado' });
    }

    const newUser = { name, email, password, dpi };
    users.push(newUser);
    res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
    res.json(users);
});

app.put('/users/:dpi', (req, res) => {
    const { dpi } = req.params;
    const { name, email, password } = req.body;

    const userIndex = users.findIndex(user => user.dpi === dpi);
    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    // Si se intenta cambiar el DPI, verificar que no esté registrado
    if (req.body.dpi && req.body.dpi !== dpi) {
        const dpiExists = users.find(user => user.dpi === req.body.dpi);
        if (dpiExists) {
            return res.status(400).json({ message: 'El nuevo DPI ya está registrado' });
        }
        users[userIndex].dpi = req.body.dpi;
    }

    users[userIndex] = { ...users[userIndex], name, email, password };
    res.json(users[userIndex]);
});

app.delete('/users/:dpi', (req, res) => {
    const { dpi } = req.params;
    const userIndex = users.findIndex(user => user.dpi === dpi);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    users.splice(userIndex, 1);
    res.status(204).send(); 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
