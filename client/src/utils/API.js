import axios from "axios";

//TEST GET
const eventSearch = function() {
        let printMe = axios.get("/api/search");
        console.log(printMe);
    }
// END TEST GET

export {eventSearch}


//EVENT API REQUEST - GET

//END EVENT API REQUEST - GET