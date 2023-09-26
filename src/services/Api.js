import axios from "axios";

const Api = axios.create({ baseURL: process.env.BASE_URL });

Api.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export default Api;
