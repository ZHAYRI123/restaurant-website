import express, { urlencoded, static } from 'express';
import { connect } from 'mongoose';
import { config } from 'dotenv';
import { join } from 'path';

config();
const app = express();

// Configuration de MongoDB
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middlewares
app.use(urlencoded({ extended: true }));
app.use(static(join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
app.use('/', require('./routes/index'));
app.use('/booking', require('./routes/booking'));

app.set('view engine', 'ejs');

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
