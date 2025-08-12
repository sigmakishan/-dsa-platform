// server/server.js

const express = require('express');
const cors = require("cors");
require('dotenv').config();

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// --- Import the new auth routes ---
const authRoutes = require('./routes/auth');

// --- Use the routes ---
// Any request starting with "/api/auth" will be handled by our authRoutes file.
app.use('/api/auth', authRoutes);

// --- Test Route ---
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from the backend server! It's working!" });
});

// --- Start the Server ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running successfully on port ${PORT}`);
});