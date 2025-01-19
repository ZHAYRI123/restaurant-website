import express from 'express';
const router = express.Router();

// Route pour rendre une page avec la mise en page principale
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Welcome to Farine', 
    page: 'home', // Identifie la page actuelle pour le conditionnement des scripts
    googleApiKey: process.env.GOOGLE_MAPS_API_KEY, // Ajoutez votre clé API ici
  });
});

router.get('/menu', (req, res) => {
  res.render('menu', {
    title: 'Our Menu - Farine',
    page: 'menu',
  });
});

router.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us - Farine',
    page: 'about',
    googleApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
});

router.get('/book', (req, res) => {
  res.render('booking', {
    title: 'Book a Table - Farine',
    page: 'book',
  });
});

export default router;
