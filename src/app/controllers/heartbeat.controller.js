'use strict';

const db = require('../database');

let heartbeatController = async () => {
  try {
    await db.connectToDb();
  } catch (e) {
    console.log(e);
  }
}

exports.heartbeatController = heartbeatController;
