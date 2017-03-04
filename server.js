const express = require('express');
const app = express();
// app.use(bodyParser.json());
// const bodyParser = require('body-parser');
const path = require('path');
app.use('/',express.static(path.join(__dirname, 'client')));
const knex = require('knex')({
    client: 'pg',
    connection: {
    host : 'ec2-184-72-252-69.compute-1.amazonaws.com',
    user : 'ialeurvhndzsio',
    password : 'e2016813fd4c28db4b657859fdfbcd15bc8039c67dda63b52987a40efa4aca4b',
    database : 'd4mcuuro9s7ol0'
  },
});






app.('/test', (req,res) => {
    knex.schema.createTableIfNotExists("test", function (table) {
        table.increments(); 
        table.string('name');
        table.string('description');
    })
    .then(data => {
    	console.log(data);
    	res.status(200).json({message: "hope"});
    });
});




























app.listen(process.env.PORT || 8080, () => console.log(
  `Your app is listening on port ${process.env.PORT || 8080 }`));