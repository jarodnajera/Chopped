//const recipes = require('./recipes.json');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");
const path = './backup.json'
var recipe_fs = fs.readFileSync('server/recipes.json');
var recipes = JSON.parse(recipe_fs);

const pushData = (recipes, newData) => {
  try {
    console.log('Pushed newData to recipes object');
    recipes.push(newData);
  } catch (err) {
    console.error(err)
  }
}

const backupData = (recipes, path) => {
    try {
      fs.writeFileSync(path, JSON.stringify(recipes))
      console.log(`Stored data to ${path}`);
    } catch (err) {
      console.error(err)
    }
  }

const getData = (path) => {
    try {
      console.log(`Reading data from ${path}`);
      return fs.readFileSync(path, 'utf8')
    } catch (err) {
      console.error(err)
      return false
    }
  }

app.use(cors());

app.get('/api', (req, res) => {
  backupData(recipes, path);
  console.log(getData(path));
  res.json(recipes);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});