const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/users')

const app = express();

const port = 4000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', users)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

module.exports = app;
