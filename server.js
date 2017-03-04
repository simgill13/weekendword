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






app.post('/test/:name/:description', (req,res) => {

	const dummy = {
		name : req.params.name,
		description : req.params.description
	};


    knex
    .insert(dummy)
    .then(data => {
    	console.log(data);
    	res.status(200).json(data);
    });
});







app.get('/test', (req,res) => {

	knex
	.select('*')
	.from('test')
	.then(response => {
		res.status(200).json(response);
	});
});





























