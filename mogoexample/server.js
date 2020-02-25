const Express = require("express");
const App = Express();
const port = 80;

const Database = require ("./Database.js");

let database = new Database();

App.get("/movies/title/:title", (req, res) => {

    let result = {"error": "couldn't find!"};

    let movie = database.findTitle(req.params.title);

    if (movie != null) {
        result = movie;
    }

    res.json(result);
});

//year
App.get("/movies/year/:year", (req, res) => {

    let result = {"error": "couldn't find!"};
    

    res.json(result);
});


App.listen(port, () => {

});