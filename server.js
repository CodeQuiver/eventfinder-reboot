
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const ApiRoutes = require('./routes/ApiRoutes.js');//importing API call functions for TEST section


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

//all instances of app should use apiRoutes file for data routing
app.use("/api", ApiRoutes);

//TEST COMMANDS //
/* for development only, direct test commands from server to other files.*/
/* These commands will be moved to correct routing file later */



/* These commands will come from client-side in completed project.*/

  //WEATHER API TEST
    //note the time used is the unix-converted date for Sunday, January 20, 2019 4:26:51 PM
    // latitude and longitude are (38.9072, -77.0369 ) for Washington DC
    // let darkSkyTest = APIROUTES.weatherSearch(38.9072, -77.0369, 1548001611);
    // console.log("DARKSKY TEST SEARCH RESULTS/n" + darkSkyTest);
  //END WEATHER API TEST

  //EVENTBRITE API TEST
    //format - eventSearch(zip, city, state, sorting, category, date, price, keyword);
    //can have some params with blank strings but need location and date, also all entries are strings except maybe the numbers
    // let eventBriteTest = APIROUTES.eventSearch("","Orlando","FL","best","103","next_week","","");
    // console.log("EVENTBRITE TEST SEARCH RESULTS/n" + eventBriteTest);
  //END EVENTBRITE API TEST

//END TEST COMMANDS

const PORT = process.env.PORT || 3001;

// console.log('hello world');
app.listen(PORT);