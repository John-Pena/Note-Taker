const express = require('express');
const path = require('path');
const notes = require('./db/db.json');

const PORT = process.env.PORT || 3001;
const app = express();
const htmlRoutes = require('./routes');

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// insert api routes here
app.get('/api/notes', (req, res) => {
  console.log('reach');
  console.log(notes);
  res.json(notes);
});

app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}`);
});