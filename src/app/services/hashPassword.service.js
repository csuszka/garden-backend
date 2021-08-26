'use strict';

const bcrypt = require('bcrypt');

async function hashPassword (myString) {
  const saltRounds = 10;
  try {
    const hash = await bcrypt.hash(myString, saltRounds);
    return hash;
  } catch (error) {
    console.log(error);
  }
}

module.exports = { hashPassword: hashPassword };
