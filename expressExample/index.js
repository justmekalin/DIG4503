const Express = require("express");
const App = Express();
const port = 80;

App.get("/", function(Request, Response) {
    Response.send("Hi!");
    console.log("Got a request!");
});

App.get("/book", function(Request, Response) {
    Response.send("book!");
});

App.get("/index.html", function(Request, Response) {
    Response.send("<html><p>Hola</p></html>");
});

App.listen(port, function() {
    console.log("server running!");
});