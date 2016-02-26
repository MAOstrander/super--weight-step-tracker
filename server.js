'use strict';

const express = require('express');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db/TrackerThatTracks.db')

const PORT = process.env.PORT || 3000;

const app = express();


app.get('/', (req, res) => {
  db.all(`SELECT * FROM user`, (err, data) => {
    console.log(data)
  })
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
