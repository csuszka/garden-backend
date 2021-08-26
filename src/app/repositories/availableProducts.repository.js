'use strict';

const db = require('../database.js');

let getAvailableProducts = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM webshopitems;';
    db.conn.query(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        return resolve(rows);
      }
    })
  })
}

let getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from webshopitems WHERE id = ?';
    db.conn.query(query, [id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        return resolve(rows);
      }
    })
  })
}

let createProduct = ({ name, price, picture, details }) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO webshopitems (name, price, picture, details) VALUES (?,?,?,?),';
    db.conn.query(query, [name, price, picture, details], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        return resolve(rows);
      }
    })
  })
}

let updateProduct = ({ name, price, picture, details, id }) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE webshopitems SET name = ?, price = ?, picture = ?, details = ?,  WHERE id = ?';
    db.conn.query(query, [name, price, picture, details, id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        return resolve(rows);
      }
    })
  })
}

let deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM webshopitems WHERE id = ?';
    db.conn.query(query, [id], (err, rows) => {
      if (err) {
        reject(err);
      } else {
        return resolve(rows);
      }
    })
  })
}



module.exports = { getAvailableProducts, getProduct, createProduct, updateProduct, deleteProduct };
