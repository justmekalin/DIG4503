const Express = require("express");
const App = Express();
const port = 80;

App.get("/", function(Request, Response) {
    Response.send("Hello World!");
    console.log("Got a request!");
});


App.listen(port, function() {
    console.log("server running!");
});