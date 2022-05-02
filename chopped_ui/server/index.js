const recipes = require('./recipes.json');
const body_parser = require('body-parser');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));


app.get('/api', (req, res) => {
    res.send(recipes)
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log(`Visit http://localhost:${PORT}/api to see Recipe JSON`);
});