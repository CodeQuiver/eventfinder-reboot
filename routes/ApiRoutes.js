// configuration - sets up .env file use
require("../dotenv").config();

// setting up keys file and accessing
var keys = require("../config/keys.js");

// keys can be referenced as follows (using spotify example) "keys.spotify.secret" referencing the keys.js file