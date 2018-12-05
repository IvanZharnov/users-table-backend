const express = require('express');
const { Pool } = require('pg');
const connect = {
  database: 'usersDB',
  user: 'IvanZharnov',
  password: '0987654321',
  host: 'localhost',
  port: 5432,
  max: 100
};
const pool = new Pool(connect);

exports.getUsersService = () => {
  return new Promise((resolve, reject) => {
    pool.connect( async (err, pool) => {
      const users = await pool.query('SELECT * FROM users ORDER BY id ASC');
      if (err) {
        reject(err);
      };
      resolve(users);
    });
  });
};

exports.createUserService = (data) => {
  return new Promise((resolve, reject) => {
    pool.connect( async (err, client) => {
      const newUser = await client.query('INSERT INTO users(first_name, last_name) values($1, $2) RETURNING *', [data.first_name, data.last_name]);
      if(err) {
        reject(err);
      }
      resolve(newUser);
    });
  });
};

exports.updateUserService = (id, data) => {
  return new Promise((resolve, reject) => {
    pool.connect( async (err, client) => {
      const updatedUser = await client.query('UPDATE users SET first_name=($1), last_name=($2) WHERE id=($3) RETURNING *', [data.first_name, data.last_name, id]);
      if(err) {
        reject(err);
      }
      resolve(updatedUser);
    });
  });
};

exports.deleteUserService = (id) => {
  return new Promise((resolve, reject) => {
    pool.connect( async (err, client) => {
      const deletedUser = await client.query('DELETE FROM users WHERE id = $1', [id]);
      if(err) {
        reject(err);
      }
      resolve(deletedUser);
    });
  });
};
