const Pokemon = require("json-pokemon");
const chalk = require("chalk");
const Express = require ("express");
const App = Express();
const port = 80;


App.get("/id/:id", (req, res) => {
    let result = { error: "ID does not exist!" };
  
    Pokemon.forEach((value) => {
      if (value.id == req.params.id) {
        result = value;
        res.send(value);
      }
    });
  
    if (result.error) {
      console.log(chalk.red(result.error));
    } else {
      console.log(chalk.green(req.path));
    }
    res.send(result);
  });
  
  App.get("/name/:name", (req, res) => {
    let result = { error: "Name does not exist!" };
  
    Pokemon.forEach((value) => {
      if (value.name == req.params.name) {
        result = value;
        res.send(value);
      }
    });
  
    if (result.error) {
      // Invalid
      console.log(chalk.red(result.error));
    } else {
      // Valid
      console.log(chalk.green(req.path));
    }
    res.send(result);
  })


App.listen(port, () => {
    console.log("Server Running!");
});