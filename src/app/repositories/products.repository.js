'use strict';

const db = require('../database.js');

let getAllAvailableProducts = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM webshopitems;';
    db.conn.query(query, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        return resolve(rows);
      }
    })
  })
}

let getAllProductFromACategory = (category) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM webshopitems WHERE category = ?'
    db.conn.query(query, [category], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        return resolve(rows);
      }
    })
  })

}

let getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from webshopitems WHERE id = ?';
    db.conn.query(query, [id], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        return resolve(rows);
      }
    })
  })
}

let createProduct = ({ category, name, price, picture, details }) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO webshopitems (name, price, picture, details) VALUES (?,?,?,?)';
    db.conn.query(query, [category, name, price, picture, details], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        return resolve(rows);
      }
    })
  })
}

let updateProduct = ({ name, category, price, picture, details, id }) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE webshopitems SET ${name ? 'name = ?, ' : ''}${category ? 'category = ?, ' : ''}${price ? 'price = ?, ' : ''}${picture ? 'picture = ?, ' : ''}${details ? 'details = ? ' : ''}WHERE id = ?;`;
    const queryArray = [name, Number(category), price, picture, details, Number(id)].filter(variable => variable);

    if (queryArray.length < 2) {
      reject(new Error('No changes were made'))
    } else {
      const modifiedQuery = query.replace(', WHERE id = ?', ' WHERE id = ?');

      db.conn.query(modifiedQuery || query, queryArray, (error, rows) => {
        if (error) {
          reject(error);
        } else {
          return resolve(rows);
        }
      })
    }
  })
}

let deleteProduct = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM webshopitems WHERE id = ?';
    db.conn.query(query, [id], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        return resolve(rows);
      }
    })
  })
}


module.exports = {
  getAllAvailableProducts,
  getAllProductFromACategory,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct
};
