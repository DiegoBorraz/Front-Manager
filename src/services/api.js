import axios from "axios";
import { getToken } from "../services/Auth";

const URL = "http://127.0.0.1:3333";
const api = axios.create({
  baseURL: URL
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
export default api;
