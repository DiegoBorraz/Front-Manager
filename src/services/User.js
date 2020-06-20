import axios from "axios";

export async function login(data) {
  return await axios.post("http://127.0.0.1:3333/login", data);
}

export async function register(data) {
  return await axios.post("http://127.0.0.1:3333/register", data);
}
