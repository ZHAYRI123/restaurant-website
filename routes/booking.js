import express from 'express';
import Reservation from '../models/Reservation.js';

const router = express.Router();

// Route GET 
router.get('/', (req, res) => {
  res.render('booking', {
    title: 'Book a Table - Farine', // dynamique title for the page
  });
});

// Route POST 
router.post('/reservation', (req, res) => {
  const { name, phone, email, persons, date } = req.body;

  // Traitement ou sauvegarde des données (par exemple, dans une base de données)
  console.log('New Reservation:', { name, phone, email, persons, date });

  // Vous pouvez envoyer une réponse ou rediriger vers une autre page
  res.render('confirmation', {
    title: 'Reservation Confirmed - Farine',
    name,
    date,
    persons,
  });
});

export default router;