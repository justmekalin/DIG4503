const Pokemon = require("json-pokemon");
const chalk = require("chalk");
const Express = require ("express");
const App = Express();
const port = 80;

//response to public directory
App.use('/', Express.static("client/build"));


App.get("/id/:id", (req, res,) => {
    let result = { error: "The ID does not exist!" };
  
    Pokemon.forEach((value) => {
      if (value.id == req.params.id) {
        result = value;
      }
    });

  //red for invalid
  //green for valid
    if (result.error) {
      console.log(chalk.red(req.path));
    } else {
      console.log(chalk.green(req.path));
    }
      //use res.json instead res.send
    res.json(result);
  });
  
  //note to self: capitalize first letter in the name when putting it in
  App.get("/name/:name", (req, res) => {
    let result = { error: "The name does not exist!" };
  
    Pokemon.forEach((value) => {
      if (value.name == req.params.name) {
        result = value;
      
      }
    });
  
    if (result.error) {
      
      console.log(chalk.red(req.path));
    } else {
      console.log(chalk.green(req.path));
    }
    //use res.json instead res.send
    res.json(result);
    
  });



App.listen(port, () => {
    console.log("Server Running!");
});