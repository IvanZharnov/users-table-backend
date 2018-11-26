const express = require('express');
const userService = require('../services/userService');
//const exports = module.exports

// const { Pool } = require('pg');
// const parse = require('pg-connection-string').parse;
// const connect = parse('postgres://IvanZharnov:0987654321@localhost:5432/usersDB');
// const pool = new Pool(connect);


exports.getUsers = async (req, res) => {
  console.log(userService);
  await userService.getUsersService()
  return res.send(res.rows);
};

// exports.createUser = (req, res, next) => {
//   const data = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };
//   console.log('Create new user.');
//   pool.connect((err, client, done) => {
//     if(err) {
//       console.log('error fetching client from pull', err);
//     }
//     client.query('INSERT INTO users(first_name, last_name) values($1, $2)',
//       [data.first_name, data.last_name]);
//
//     client.query('SELECT * FROM users WHERE first_name=($1) AND last_name=($2)', [data.first_name, data.last_name], (err, result) => {
//       if(err) {
//         console.log('error running query', err);
//       }
//       return res.send(result.rows);
//     });
//   });
// };
//
// exports.updateUser = (req, res, next) => {
//   const id = req.params.id;
//   const data = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };
//   console.log('Update user with id: ', id);
//   pool.connect((err, client, done) => {
//     if(err) {
//       console.log('error fetching client from pull', err);
//     }
//     client.query('UPDATE users SET first_name=($1), last_name=($2) WHERE id=($3)', [data.first_name, data.last_name, id], (err, result) => {
//       if(err) {
//         console.log('error running query', err);
//       }
//       return res.set(result.rows);
//     });
//     client.query('SELECT id, first_name, last_name FROM users WHERE id=($1)', [id], (err, result) => {
//       if(err) {
//         console.log('error running query', err);
//       }
//       return res.send(result.rows);
//     });
//   });
// };
//
// exports.deleteUser = (req, res, next) => {
//   const id = req.params.id;
//   console.log('Delete user with id: ', id);
//   pool.connect((err, client, done) => {
//     if(err) {
//       console.log('error fetching client from pull', err);
//     }
//     client.query('DELETE FROM users WHERE id = $1', [id], (err, result) => {
//       if(err) {
//         console.log('error running query', err);
//       }
//       return res.send(result);
//     });
//   });
// };
