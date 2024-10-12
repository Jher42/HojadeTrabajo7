import express, { Request, Response } from 'express';
import { User } from './types/user'; 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); 

let users: User[] = []; 


app.get('/', (req: Request, res: Response) => {
    res.send('Bienvenido a la API de gestión de usuarios');
});


app.post('/users', (req: Request, res: Response) => {
    const { dpi, name, email, password }: User = req.body;


    const userExists = users.some(user => user.dpi === dpi);
    if (userExists) {
        res.status(400).json({ message: 'El DPI ya está registrado' });
        return;
    }
   
    const newUser: User = { dpi, name, email, password };
    users.push(newUser);

    res.status(201).json({ message: 'Usuario creado exitosamente', user: newUser });
});


app.get('/users', (req: Request, res: Response) => {
    res.status(200).json(users);
});

app.put('/users/:dpi', (req: Request, res: Response) => {
    const { dpi } = req.params;
    const { name, email, password, newDpi }: Partial<User> = req.body;

    const userIndex = users.findIndex(user => user.dpi === dpi);

  
    if (userIndex === -1) {
        res.status(404).json({ message: 'Usuario no encontrado' });
        return;
    }

   
    if (newDpi && newDpi !== dpi) {
        const dpiExists = users.some(user => user.dpi === newDpi);
        if (dpiExists) {
             res.status(400).json({ message: 'El nuevo DPI ya está registrado' });
             return
        }
        users[userIndex].dpi = newDpi;
    }

   
    if (name !== undefined) users[userIndex].name = name;
    if (email !== undefined) users[userIndex].email = email;
    if (password !== undefined) users[userIndex].password = password;

    res.status(200).json({ message: 'Usuario actualizado', user: users[userIndex] });
});


app.delete('/users/:dpi', (req: Request, res: Response) => {
    const { dpi } = req.params;

    const userIndex = users.findIndex(user => user.dpi === dpi);

 
    if (userIndex === -1) {
         res.status(404).json({ message: 'Usuario no encontrado' });
         return
    }

    users.splice(userIndex, 1);
    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
});

app.listen(port, () => {
    console.log(Servidor escuchando en http://localhost:${port});
});
