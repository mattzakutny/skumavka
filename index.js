const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const Item = require("./api/models/skumavkaModel");
const bodyParser = require('body-parser');

// get our server running
app.listen(port, () => {
    console.log("App up and running on" + port);
});

// handle incoming requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// middleware to handle wrong routes 
app.use( (req, res) => {
    res.status(404).send({ url: req.originalUrl + 'not found' });
});

let routes = require("./api/routes/skumavkaRoutes");
routes(app); // register our routes

app.listen(port); 
console.log('App running on ' + port);