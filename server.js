const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// insert api routes here

app.listen(PORT, () => {
  console.log(`Server now on port ${PORT}`);
});