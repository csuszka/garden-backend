'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const heartbeatController = require('./controllers/heartbeat.controller');
const availableProducts = require('./controllers/availableProducts.controller');
// const session = require('./controllers/session.controller');
// const register = require('./controllers/register.controller');
//const expressValidator = require('express-validator');

const cors = require('cors');
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => callback(null, true)
};

app.use(cors(corsOptions));
app.use(express.json());
//app.use(expressValidator());
//app.use('/heartbeat', heartbeatController); not a middleware!
app.use('/api/products', availableProducts);

// app.use('/api/users', register);
// app.use('/api/sessions', session);

app.use('/', (req, res) => {
  res.send('There is nothing in here...yet');
});

app.use('/', router);

module.exports = app;
