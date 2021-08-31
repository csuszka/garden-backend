'use strict';

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  insecureAuth: true
});

let connectToDb = () => {
  conn.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  });
}

connectToDb();

exports.connectToDb = connectToDb;
exports.conn = conn;
