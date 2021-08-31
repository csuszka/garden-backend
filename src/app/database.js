'use strict';

const mysql = require('mysql');
const errorMessage = require('./constants');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  insecureAuth: true
});

/*async*/ function connectToDb () {
  // try {
  //   await conn.connect(() => {
  //     console.log('Database connected');
  //   });
  // } catch (e) {
  //   console.log(errorMessage.CONNECTION_TO_DB_FAILED + e);
  // }
  conn.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    // console.log('connected as id ' + conn.threadId);
  });
}

connectToDb();

exports.connectToDb = connectToDb;
exports.conn = conn;
