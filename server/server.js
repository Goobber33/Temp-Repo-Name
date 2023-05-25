const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// allow cross-origin requests
app.use(cors());

// parse JSON
app.use(express.json());

// connect to MongoDB
mongoose.connect('mongodb://localhost:27017/game', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
