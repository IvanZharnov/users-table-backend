const express = require('express');
const userService = require('../services/userService');
const wrap = require('../middlewares/wrap')

exports.getUsers = async (req, res) => {
  const results = await userService.getUsersService();
  console.log('controller', results);
  return res.send(results);
};

// exports.createUser = (req, res) => {
//   const data = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };
//   const result = userService.createUserService();
//   console.log('controller', results);
//   return res.send(results);
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
//     client.query('UPDATE users SET first_name=($1), last_name=($2) WHERE id=($3) RETURNING *', [data.first_name, data.last_name, id], (err, result) => {
//       if(err) {
//         console.log('error running query', err);
//       }
//       return res.set(result.rows);
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
