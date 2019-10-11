// inside we will create our instance of axios
// and then export it

import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3001"
});
