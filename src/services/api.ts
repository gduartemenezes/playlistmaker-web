import axios from "axios";
//commentsss
const api = axios.create({
  baseURL: "http://localhost:3333",
});

export { api };