'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./db/TrackerThatTracks.db');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('index');
});


app.post('/', (req, res) => {
  const username = req.body.user;
  const steps = req.body.steps;
  const weight = req.body.weight;
  const password = req.body.pass;



  db.run(`INSERT INTO user 
    (userName, password)
    VALUES ('${username}', '${password}')`,
    (err, data) => {
    if (err) throw err;

    res.send(data);
  });

  db.all(`SELECT * FROM user`, (err, data) => {
    if (err) throw err;
  console.log(req.body);
    res.send(data);
  });
});



app.get('/profile', (req, res) => {
  res.render('profile');
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})
