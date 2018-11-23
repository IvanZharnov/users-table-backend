const express = require('express');

const { Pool } = require('pg');
const parse = require('pg-connection-string').parse;
const connect = parse('postgres://IvanZharnov:0987654321@localhost:5432/usersDB');
const pool = new Pool(connect);

exports.getUsers = (req, res, next) => {
  console.log('Get all users.');
  pool.connect((err, client, done) => {
    if(err) {
      console.log('error fetching client from pull', err);
    }
    client.query('SELECT * FROM users', (err, result) => {
      if(err) {
        console.log('error running query', err);
      }
      return res.send(result.rows);
    });
  });
};

exports.createUser = (req, res, next) => {
  const data = {
    first_name: req.body.first_name,
    last_name: req.body.last_name
  };
  console.log('Create new user.');
  pool.connect((err, client, done) => {
    if(err) {
      console.log('error fetching client from pull', err);
    }
    client.query('INSERT INTO users(first_name, last_name) values($1, $2)',
      [data.first_name, data.last_name], (err, result) => {
      if(err) {
        console.log('error running query', err);
      }
      return res.set(result.rows);
    });
    client.query('SELECT * FROM users', (err, result) => {
      if(err) {
        console.log('error running query', err);
      }
      return res.send(result);
    });
  });
};

// router.put('/api/v1/todos/:todo_id', (req, res, next) => {
//   const results = [];
//   // Grab data from the URL parameters
//   const id = req.params.todo_id;
//   // Grab data from http request
//   const data = {text: req.body.text, complete: req.body.complete};
//   // Get a Postgres client from the connection pool
//   pg.connect(connectionString, (err, client, done) => {
//     // Handle connection errors
//     if(err) {
//       done();
//       console.log(err);
//       return res.status(500).json({success: false, data: err});
//     }
//     // SQL Query > Update Data
//     client.query('UPDATE items SET text=($1), complete=($2) WHERE id=($3)',
//     [data.text, data.complete, id]);
//     // SQL Query > Select Data
//     const query = client.query("SELECT * FROM items ORDER BY id ASC");
//     // Stream results back one row at a time
//     query.on('row', (row) => {
//       results.push(row);
//     });
//     // After all data is returned, close connection and return results
//     query.on('end', function() {
//       done();
//       return res.json(results);
//     });
//   });
// });

exports.deleteUser = (req, res, next) => {
  const id = req.params.id;
  console.log('Delete user with id: ', id);
  pool.connect((err, client, done) => {
    if(err) {
      console.log('error fetching client from pull', err);
    }
    client.query('DELETE FROM users WHERE id = $1', [id], (err, result) => {
      if(err) {
        console.log('error running query', err);
      }
      return res.send(result);
    });
  });
};
