'use strict';

const db = require('../database.js');

let getAllCategories = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM categories;';
    db.conn.query(query, (error, rows) => {
      if (error) {
        reject(error);
      } else {
        return resolve(rows);
      }
    })
  })
}

let createCategory = ({ parentId, name }) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO categories (${parentId ? 'parent_id, ' : ''}${name ? 'name, ' : ''}) VALUES (${parentId ? '?, ' : ''}${name ? '?, ' : ''});`;
    const queryArray = [Number(parentId), name].filter(variable => variable);

    if (queryArray.length < 1) {
      reject(new Error('No changes were made'))
    } else {
      const modifiedQuery = query.replaceAll(', )', ')');

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

let getCategory = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from categories WHERE id = ?';
    db.conn.query(query, [id], (error, rows) => {
      if (error) {
        reject(error);
      } else {
        return resolve(rows);
      }
    })
  })
}

let updateCategory = ({ id, parentId, name }) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE categories SET ${parentId ? 'parentId = ?, ' : ''}${name ? 'name = ?, ' : ''}WHERE id = ?;`;
    const queryArray = [Number(id), Number(parentId), name].filter(variable => variable);

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

let deleteCategory = (id) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM categories WHERE id = ?';
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
  getAllCategories,
  createCategory,
  getCategory,
  updateCategory,
  deleteCategory
}