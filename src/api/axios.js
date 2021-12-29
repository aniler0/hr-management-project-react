import axios from "axios";

const API = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
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
