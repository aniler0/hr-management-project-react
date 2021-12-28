import axios from "axios";

const DEV_API = "https://jsonplaceholder.typicode.com";
const PROD_API = "";

const API = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? DEV_API : PROD_API,
});

export const getUsers = async (setUsers) => {
  const res = await API.get("/users");
  const data = res.data;
  setUsers(data);
};
export const getUserById = async (setUser, id) => {
  console.log(id);
  const res = await API.get(`/users/${id}`);
  const data = res.data;
  setUser(data);
};
