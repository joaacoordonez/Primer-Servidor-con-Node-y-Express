import express from 'express';
import { horaActual } from './time.js'; 
import { fechaCompleta } from './time.js';

const app = express();

app.get('/', (req, res) => {
    res.send("¡Bienvenido a mi servidor!");
})

app.get('/hora', (req, res) => {
    res.send(horaActual());
})

app.get('/fecha-completa', (req, res) => {
    res.send(fechaCompleta());
})

export default app;