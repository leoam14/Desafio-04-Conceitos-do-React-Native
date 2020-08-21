import axios from "axios";

const api = axios.create({
  //using ngrok for external access of Server.
  baseURL: "https://1774b1373283.ngrok.io",
});

export default api;
