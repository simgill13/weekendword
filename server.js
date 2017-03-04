const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
const path = require('path');
const {blogPost} = require('./model');
const {PORT, DATABASE_URL} = require('./config');
app.use('/',express.static(path.join(__dirname, 'client')));



app.get('/post', (req, res) => {
   
  res.sendStatus(200);     	
})






let server;
function runServer(databaseUrl=DATABASE_URL, port=PORT) {

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}



if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};


















