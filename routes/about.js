import express from 'express';
const router = express.Router();

// Route for "About" page
router.get('/', (req, res) => {
  res.render('about', { 
    title: 'About - Farine' // Titre for page
  });
});

export default router;
