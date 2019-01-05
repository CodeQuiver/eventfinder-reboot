/* FILE SUMMARY - This is the API call setup for the client-side. Using API.js from previous "eventfinder" app as model,
this will have the calls to the actual outside APIs here. Adding the keys occurs at this stage, but will probably leave
specifics of constructing the url on client-side such as the search parameters.
So far the APIs being called are: Eventbrite, DarkSky

Others may be added later to expand program features, such as additional event search engines.
*/

import axios from "axios"; //check if I need axios here or code it differently on the server-side

// configuration - sets up .env file use
require("dotenv").config();

// setting up keys file and accessing
var keys = require("../config/keys.js");

// keys can be referenced as follows (using spotify example) "keys.spotify.secret" referencing the keys.js file

const EVENTBRITEBASEURL = "https://www.eventbriteapi.com/v3/events/search/?";
const EVENTBRITEAPIKEY = keys.eventbrite.apikey;

const WEATHAPIKEY = keys.darksky.apikey;


// VARIABLES FOR WEATHER - required formats
    // Latitude - in decimal degrees. Positive is north, negative is south.
    // Longitude - in decimal degrees. Positive is east, negative is west.
    // DateTime - Either a UNIX time (that is, seconds since midnight GMT on 1 Jan 1970) or a string formatted as follows: [YYYY]-[MM]-[DD]T[HH]:[MM]:[SS]

export default {
//WEATHER SEARCH
weatherSearch: function(latitude, longitude, dateTime) {
    //DARKSKY weather API call goes here
    const weatherQueryURL = "https://api.darksky.net/forecast/" + WEATHAPIKEY + "/" + latitude + "," + longitude + "," + dateTime + "?exclude=currently,minutely,flags";
    console.log("DARKSKY QUERY URL: " + weatherQueryURL);

    return axios.get(weatherQueryURL);
}



};