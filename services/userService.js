const express = require('express');
const { Pool } = require('pg');
const parse = require('pg-connection-string').parse;
const connect = parse('postgres://IvanZharnov:0987654321@localhost:5432/usersDB');
const pool = new Pool(connect);

exports.getUsersService = () => {
  pool.connect((err, client, done) => {
    client.query('SELECT * FROM users ORDER BY id ASC')
    .then(res => console.log(res.rows))
    .catch(err => console.error(err.stack))
  });
};
