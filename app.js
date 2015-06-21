/*
 * Module dependencies.
 */
var config = require("./config"),
    express = require('express'),
    morgan = require('morgan'),
    config = require('./config'),
    favicon = require('serve-favicon'),
    app = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    sampleController = require('./routes/sample.js'),
    peopleController = require('./routes/people.js');


app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(methodOverride());


/***********************************************/
/*                    ROUTES                   */
/***********************************************/

// Gets a greeting message
// curl -XGET localhost:3000/
app.get("/", sampleController.index);

// Gets the list of people
// curl -XGET localhost:3000/people
app.get("/people", peopleController.list);

// Gets one specific person from the list, identified by the param "id"
// curl -XGET localhost:3000/people/1
app.get("/people/:id", peopleController.get);

/* 
* TODO
* Implement the two following methods
*/

// Creates a new person on the people.json file
/*
  curl -XPOST -i \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{ "name" : "Your Name", "email" : "email@example.com", "twitter": { "handle" : "example" } }' \
  localhost:3000/people
*/
app.post("/people", peopleController.create);

/*
  curl -XPUT -i \
  -H "Accept: application/json" \
  -H "Content-Type: application/json" \
  -d '{ "name" : "Your Name", "email" : "new_email@example.com", "twitter": { "handle" : "new_example" } }' \
  localhost:3000/people
*/
// Updates the data of an existing person on the people.json file
app.put("/people/:id", peopleController.update);

// Deletes the data of an existing person on the people.json file
/*
  curl -XDELETE -i localhost:3000/people/2
*/
app.delete("/people/:id", peopleController.delete);


/***********************************************/
/*                SERVER LISTEN                */
/***********************************************/
app.listen(process.env.PORT || config.port);