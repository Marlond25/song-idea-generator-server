require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const instruments = require('./src/api/instruments');

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {console.log('mongodb connected...')})
  .catch((error) => {console.log(error)});

app.use('/api/instruments', instruments);

const port = process.env.PORT || 6969;

app.listen(port, () => {console.log(`Listening on http://localhost:${port}`)});
