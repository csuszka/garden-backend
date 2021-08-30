'use strict';

require('dotenv').config();
const mysql = require('mysql');
const errorMessage = require('./constants');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

async function connectToDb () {
  try {
    await conn.connect(() => {
      console.log('Database connected');
    });
  } catch (e) {
    console.log(errorMessage.CONNECTION_TO_DB_FAILED + e);
  }
}

connectToDb();

exports.connectToDb = connectToDb;
exports.conn = conn;
