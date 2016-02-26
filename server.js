'use strict';

const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db/TrackerThatTracks.db')

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index');
  // db.run(`INSERT INTO weight VALUES (1, 1, 'March 17', 150)`, (err, data) => {
  //   if (err) throw err;

  //   res.send(data);
  // });

  // db.all(`SELECT * FROM user`, (err, data) => {
  //   if (err) throw err;

  //   res.send(data);
  // })
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
