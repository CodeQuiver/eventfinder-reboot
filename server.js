
const express = require('express');
const app = express();
const mongoose = require('mongoose');


const APIROUTES = require('./routes/ApiRoutes.js');//importing API call functions

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern",
  {
    useNewUrlParser: true
    //added this line because error message said old URL parser is deprecated
    //this is the line it instructed to add to use the new one
  }
);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

//TEST COMMAND
    //note the time used is the unix-converted date for Sunday, January 20, 2019 4:26:51 PM
    let darkSkyTest = APIROUTES.weatherSearch(38.9072, 77.0369, 1548001611);

    console.log(darkSkyTest);

const PORT = process.env.PORT || 3001;

console.log('hello world');
app.listen(PORT);