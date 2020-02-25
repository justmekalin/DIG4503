const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://mekalinpaengwan:TQZQcQWt3nrI73X1@cluster0-tc9sb.mongodb.net/";

MongoClient.connect(URL, function(error, connection) {
    if (error) {
        throw error;
    }

let database = connection.db("DIG4503-77");
let collection = database.collection("Movies");

collection.findOne({"title": "813"}, {}, function(error, result) {
    console.log(result);
});

connection.close();
});