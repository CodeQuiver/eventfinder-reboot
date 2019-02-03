import axios from "axios";

//TEST GET
export default {
    eventSearch: function() {
        let printMe = axios.get("/api/search");
        console.log(printMe);
    }
};
// END TEST GET




//EVENT API REQUEST - GET

//END EVENT API REQUEST - GET