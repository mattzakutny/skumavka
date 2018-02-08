const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

// get our server running
app.listen(port, () => {
    console.log("App up and running on" + port);
});