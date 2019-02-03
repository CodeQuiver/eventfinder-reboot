import axios from "axios";

//TEST GET
export default {
    eventSearch: function() {
      return axios.get(
          "/api/search"
      )
    }
};
// END TEST GET




//EVENT API REQUEST - GET

//END EVENT API REQUEST - GET