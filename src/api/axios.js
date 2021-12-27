import axios from "axios";

const DEV_API = "https://jsonplaceholder.typicode.com/users";
const PROD_API = "";

const API = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? DEV_API : PROD_API,
});
