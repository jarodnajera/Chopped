const recipes = require('./data/recipes.json');
const body_parser = require('body-parser');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(body_parser.urlencoded({ extended: true }));


app.get('/api', (req, res) => {
    res.send(recipes);
});

app.post('/api', (req, res) => {
    const json_string = JSON.stringify(recipes);
    var dict = JSON.parse(json_string);
    for (var key in dict) {
        if (dict[key.id] == req.body.id) {
            delete dict[key];
        }
    }
    dict[req.body.name] = req.body;
    var write_json = JSON.stringify(dict);
    var fs = require('fs');
    fs.writeFile('./data/recipes.json', write_json, 'utf8', function(err) {
        if (err) throw err;
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
    console.log(`Visit http://localhost:${PORT}/api to see Recipe JSON`);
});