'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const routes = require('./app/routes.js');
const PORT = process.env.PORT || 8080;
//const expressValidator = require('express-validator');

const cors = require('cors');
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => callback(null, true)
};

app.use(cors(corsOptions));
app.use(express.json());
//app.use(expressValidator());

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;