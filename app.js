const express = require('express');
const bodyParser = require('body-parser');

const users = require('./routes/users')

const app = express();

const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', users)

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

module.exports = app;
