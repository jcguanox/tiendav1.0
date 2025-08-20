// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import pool from './config/database.js'; // Ajusta la ruta si database.js está en otra carpeta

dotenv.config();
const app = express();

app.use(express.json());

// Ruta de prueba
app.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'Servidor funcionando', hora: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al conectar a la base de datos' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
