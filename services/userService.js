const express = require('express');
const { Pool } = require('pg');
const parse = require('pg-connection-string').parse;
const connect = parse('postgres://IvanZharnov:0987654321@localhost:5432/usersDB');
const pool = new Pool(connect);

exports.getUsersService = () => {
  return new Promise((resolve, reject) => {
    pool.connect( async (err, client) => {
      const result = await client.query('SELECT * FROM users ORDER BY id ASC');
      if (err) {
        return console.error('Error acquiring client', err.stack)
      };
      console.log('service', result.rows);
      return result.rows;
    });
  });
};

// exports.createUserService = (data) => {
//   pool.connect(async(err, client, done) => {
//     const newUser = await client.query('INSERT INTO users(first_name, last_name) values($1, $2) RETURNING *', [data.first_name, data.last_name]);
//     if(err) {
//       console.log('error fetching client from pull', err);
//     }
//     console.log('service', newUser.rows);
//     return newUser.rows;
//   });
// };
