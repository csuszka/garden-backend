'use strict';

require('dotenv').config();
const app = require('./app/routes.js');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;