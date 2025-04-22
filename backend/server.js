const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // For handling CORS issues
const app = express();
const port = 5000; 

// Middleware
app.use(express.json()); // This is to handle JSON requests
app.use(cors()); // Allow cross-origin requests

const mongoURI = 'mongodb://localhost:27017/Pandhiku-Mundhu';

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected to local instance'))
  .catch(err => console.log('MongoDB connection error: ', err));

const Reservation = require('./models/reservation');

app.get('/', (req, res) => {
  res.send('Restaurant Reservation Backend is running!');
});

app.post('/api/reservations', async (req, res) => {
  try {
    const { name, phone, date, time, guests, preference } = req.body;

    const newReservation = new Reservation({
      name,
      phone,
      date,
      time,
      guests,
      preference
    });

    await newReservation.save();
    
    res.status(200).json({ message: 'Reservation successfully made!' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to make reservation', error: err });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});