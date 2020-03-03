const Express = require('express');
const App = Express();
const port = 80;

const CORS = require('cors');
App.use(CORS());

const MongoDB = require('mongodb');
const MongoClient = MongoDB.MongoClient;

const URL = 'mongodb+srv://mekalinpaengwan:TQZQcQWt3nrI73X1@cluster0-tc9sb.mongodb.net/'

let collection = null;

MongoClient.connect(URL, (error, connection) => {
    if(error) {
        throw error;
    }
    let database = connection.db("DIG4503-77");
     collection = database.collection("Movies");

});

App.get("/movies/title/:title", (req, res) => {
    let result = {"error": "could not find title"};
    if(collection != null) {
        collection.find({"title:": new RegExp(req.params.title)}).limit(100).toArray()
        .then((processedArray) => {
            console.log(processedArray);
        });

    }

    res.json(result);

});

App.listen(port, () =>{

});