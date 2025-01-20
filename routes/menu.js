import express from 'express';
const router = express.Router();

// elemet of menu
const menuItems = [
  { name: 'Cheeseburger', price: 10, description: 'Juicy beef patty with cheese', category: 'burger', image: '../images/cheeseburger.jpg' },
  { name: 'Pepperoni Pizza', price: 12, description: 'Classic pizza with pepperoni', category: 'pizza', image: '../images/pepperoni-pizza.jpg' },
  { name: 'Spaghetti Bolognese', price: 15, description: 'Traditional Italian pasta', category: 'pasta', image: '../images/spaghetti.jpg' },
  { name: 'French Fries', price: 5, description: 'Crispy and golden fries', category: 'fries', image: '../images/fries.jpg' },
  { name: 'Veggie Pizza', price: 11, description: 'Pizza loaded with fresh veggies', category: 'pizza', image: '../images/veggie-pizza.jpg' },
  { name: 'Grilled Chicken Sandwich', price: 9, description: 'Grilled chicken with lettuce and tomato', category: 'burger', image: '/images/chicken-sandwich.jpg' },
];

// Route GET for menu
router.get('/', (req, res) => {
  res.render('menu', {
    title: 'Our Menu - Farine',
    menuItems, // menu to template EJS
  });
});

export default router;
