'use strict';
const db = require('../database.js');

let connectToDb = async () => {
  await db.conn.connect(() => {
    console.log(1);
    db.conn.end();
  });
}

let getDbStatus = () => {
  try {
    await connectToDb();
  } catch (e) {
    console.log(0);
  }
}

export default getDbStatus;
