const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
const path = require('path');
app.use('/',express.static(path.join(__dirname, 'client')));





app.get('/post', (req, res) => {})


app.get('/post/:id', (req, res) => {});

app.post('/post', (req, res) => {})

app.put('/post/:id', (req, res) => {})

app.delete('/post/:id', (req , res) =>{});




















app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));