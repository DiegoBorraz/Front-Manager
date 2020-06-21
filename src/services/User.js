import api from "./api";

export async function login(data) {
  return await api.post("login", data);
}

export async function register(data) {
  return await api.post("/register", data);
}
