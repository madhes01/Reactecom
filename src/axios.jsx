import axios from "axios";

const API = axios.create({
  baseURL: "https://cautious-space-meme-x476g6594q9cp77q-8080.app.github.dev/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
