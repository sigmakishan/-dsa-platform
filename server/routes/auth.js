// server/routes/auth.js

const express = require('express');
const router = express.Router();

// --- REGISTER ROUTE ---
// This will handle POST requests to /api/auth/register
router.post('/register', (req, res) => {
  // req.body contains the user data sent from the frontend form
  const { username, email, password } = req.body;

  console.log('--- New Registration Request ---');
  console.log('Received data:', { username, email, password });
  
  // For now, we just send back a success message.
  // Later, we will save this user to a database.
  res.status(201).json({ 
    message: 'User registered successfully! (Backend received the data)',
    user: { username, email } 
  });
});

// --- LOGIN ROUTE ---
// This will handle POST requests to /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('--- New Login Request ---');
  console.log('Received data:', { email, password });

  // For now, we just send back a success message.
  // Later, we will check this against a database.
  res.status(200).json({
    message: 'User logged in successfully! (Backend received the data)',
    user: { email }
  });
});


module.exports = router; // This makes the router available to other files