const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Don't forget to import CORS
const app = express();
const port = 5000; // You can change the port number if you'd like

// Middleware
app.use(express.json()); // This is to handle JSON requests
app.use(cors()); // Allow cross-origin requests

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/Pandhiku-Mundhu';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected to local instance'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Import the Reservation model
const Reservation = require('./models/Reservation');

// Basic route to check if server is running
app.get('/', (req, res) => {
  res.send('Restaurant Reservation Backend is running!');
});

// POST route to handle reservation submission
app.post('/api/reservations', async (req, res) => {
  try {
    const { name, phone, date, time, guests, preference } = req.body;

    // Create a new reservation using the data from the frontend
    const newReservation = new Reservation({
      name,
      phone,
      date,
      time,
      guests,
      preference
    });

    // Save the reservation to the database
    await newReservation.save();
    
    // Send a success response back to the frontend
    res.status(200).json({ message: 'Reservation successfully made!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to make reservation', error: err });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});