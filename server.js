const express = require('express');
const app = express();
// app.use(bodyParser.json());
// const bodyParser = require('body-parser');
const path = require('path');
app.use('/',express.static(path.join(__dirname, 'client')));
// const knex = require('knex')({
//     client: 'pg',
//     connection: {
//     host : 'postgres://dyywuotk:7TvX8RVk9BrOZdAwDGdc32WaUu2pQSuh@babar.elephantsql.com:5432/dyywuotk',
//     user : 'dyywuotk',
//     password : '7TvX8RVk9BrOZdAwDGdc32WaUu2pQSuh',
//     database : 'dyywuotk'
//   },
// });



app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));