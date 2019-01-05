/* FILE SUMMARY - This is the API call setup for the client-side. Using API.js from previous "eventfinder" app as model,
this will have the calls to the actual outside APIs here. Adding the keys occurs at this stage, but will probably leave
specifics of constructing the url on client-side such as the search parameters.
So far the APIs being called are: Eventbrite, DarkSky

Others may be added later to expand program features, such as additional event search engines.
*/

// setting up all node packages
let request = require('request');

// import axios from "axios"; //axios is throwing an error, may be incorrect here
//possible axios is not correct here, probably what I should use for client-side only
// maybe use "request" npm package for this - sending server-side http requests - that is what was used in a previous project ("liri app")

// configuration - sets up .env file use
require("dotenv").config();

// setting up keys file and accessing
let keys = require("../config/keys.js");
// keys can be referenced as follows (using spotify example) "keys.spotify.secret" referencing the keys.js file

const EVENTBRITEBASEURL = "https://www.eventbriteapi.com/v3/events/search/?";
const EVENTBRITEAPIKEY = keys.eventbrite.apikey;

const WEATHAPIKEY = keys.darksky.apikey;


// VARIABLES FOR WEATHER - required formats
    // Latitude - in decimal degrees. Positive is north, negative is south.
    // Longitude - in decimal degrees. Positive is east, negative is west.
    // DateTime - Either a UNIX time (that is, seconds since midnight GMT on 1 Jan 1970) or a string formatted as follows: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]


//WEATHER SEARCH
const weatherSearch = function(latitude, longitude, dateTime) {
    // CONSTRUCT QUERY URL
    const weatherQueryURL = "https://api.darksky.net/forecast/" + WEATHAPIKEY + "/" + latitude + "," + longitude + "," + dateTime + "?exclude=currently,minutely,flags";

    console.log("DARKSKY QUERY URL: " + weatherQueryURL);

    // SEND API REQUEST TO DARKSKY USING 'request'
        // format - request(queryURL, callback);

    request(weatherQueryURL, function(error, response, body) {

        // If the request is successful (i.e. if the response status code is 200)
        if (!error && response.statusCode === 200) {

            // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
            prettyWeather = JSON.parse(body); //sets the variable to the pretty-print JSON object so before passing it
            console.log(prettyWeather); // calls the printing function using the pretty-print JSON console.log
    }
});
};