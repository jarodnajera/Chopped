const recipes = require('./recipes.json');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());

app.get('/api', (req, res) => {
    res.json(recipes);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});