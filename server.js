const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/mern",
  {
    useNewUrlParser: true
    //added this line because error message said old URL parser is deprecated
    //this is the line it instructed to add to use the new one
  }
);

app.get('/', (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT);