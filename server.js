'use strict';

const express = require('express');
const sqlite3 = require('sqlite3');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
