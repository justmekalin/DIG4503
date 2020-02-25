const MongoClient = require("mongodb").MongoClient;

const URL = "mongodb+srv://mekalinpaengwan:TQZQcQWt3nrI73X1@cluster0-tc9sb.mongodb.net/";

class Database {
    constructor () {

        this.connection = null;
        this.collection = null;

        MongoClient.connect(URL, (error, connection) => {
            if (error) {
                throw error;
            }

            this.connection = connection;
        
        let database = connection.db("DIG4503-77");
        let collection = database.collection("Movies");

        this.collection = collection;
       
        connection.close();
        });
    }

    findTitle(title) {

        if (this.collection != null) {
        this.collection.findOne({"title": "813"}, {}, function(error, result) { 
        return result;
        });
        } else {
            return null;
        }
    }
}

module.exports = Database;