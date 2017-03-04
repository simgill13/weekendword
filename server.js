// const bodyParser = require('body-parser');
// const express = require('express');
// const app = express();
// app.use(bodyParser.json());
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
app.use('/',express.static(path.join(__dirname, 'client')));
const knex = require('knex')({
    client: 'pg',
    connection: {
    host : 'postgres://dyywuotk:7TvX8RVk9BrOZdAwDGdc32WaUu2pQSuh@babar.elephantsql.com:5432/dyywuotk',
    user : 'dyywuotk',
    password : '7TvX8RVk9BrOZdAwDGdc32WaUu2pQSuh',
    database : 'dyywuotk'
  },
});






// const app = express();

// app.use(bodyParser.json());

// app.post('/recipes', (req, res) => {
//     const requiredFields = ['name', 'description', 'steps'];

//     const missingIndex = requiredFields.findIndex(field => !req.body[field]);
//     if (missingIndex != -1) {
//         return res.status(400).json({
//             message: `Missing field: ${requiredFields[missingIndex]}`
//         });
//     }

//     const recipe = {
//         name: req.body.name,
//         description: req.body.description
//     };

//     knex
//         .insert(recipe)
//         .into('recipes')
//         .returning('id')
//         .then(ids => {
//             const recipeId = ids[0];
//             const steps = req.body.steps.map(step => ({
//                 content: step,
//                 recipe_id: recipeId
//             }));

//             recipe.id = recipeId;

//             return knex.insert(steps).into('steps');
//         })
//         .then(() => {
//             res.status(201).json({});
//         })
//         .catch(err => {
//             console.error(err);
//             res.status(500).json({
//                 message: 'Internal server error'
//             });
//         });
// });

// app.get('/recipes', (req, res) => {
//     knex
//         .select('recipes.id', 'recipes.name', 'recipes.description', 'steps.content')
//         .from('recipes')
//         .leftOuterJoin('steps', 'recipes.id', 'steps.recipe_id')
//         .then(rows => {
//             const merged = {};
//             rows.forEach(row => {
//                 if (!(row.id in merged)) {
//                     merged[row.id] = {
//                         id: row.id,
//                         name: row.name,
//                         description: row.description,
//                         steps: row.content ? [row.content] : []
//                     }
//                     return;
//                 }
//                 merged[row.id].steps.push(row.content);
//             });
//             res.json(Object.keys(merged).map(key => merged[key]));
//         });
// });

// app.listen(process.env.PORT || 8080);














// app.listen(process.env.PORT || 8080, () => console.log(
//   `Your app is listening on port ${process.env.PORT || 8080 }`));