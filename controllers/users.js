var express = require('express');
var router = express.Router();
const path = require('path');
const pg = require('pg');
const parse = require('pg-connection-string').parse;
const connect = parse('postgres://IvanZharnov:0987654321@localhost:5432/usersDB');
const { Pool } = require('pg');
const pool = new Pool(connect);

exports.getAll = (req, res, next) => {
  const results = [];
  console.log('getAll');
  pool.connect((err, client, done) => {
    if(err) {
      console.log('error fetching client from pull', err);
    }
    const query = client.query('SELECT * FROM users', (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      results.push(result.rows);
      done();
      return res.json(results);
    });
  });
};
