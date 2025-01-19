import express from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { join } from 'path';

config(); // Charge les variables d'environnement depuis le fichier .env

const app = express();

// Configuration de MongoDB
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middlewares
app.use(express.urlencoded({ extended: true })); // Appelle `urlencoded` via `express`
app.use(express.static(join(process.cwd(), 'public'))); // Corrige le chemin pour `static`
app.set('view engine', 'ejs');

// Routes
import mainRoutes from './routes/main.js';
import aboutRoutes from './routes/about.js';
import indexRoutes from './routes/index.js'; 
import bookingRoutes from './routes/booking.js';
import menuRoutes from './routes/menu.js';

app.use('/about', aboutRoutes);
app.use('/', mainRoutes);
app.use('/booking', bookingRoutes);
app.use('/menu', menuRoutes);

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
