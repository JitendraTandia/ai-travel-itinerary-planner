import axios from "axios";
import Cookies from "js-cookie";

export function axiosClient() {
  const token = Cookies.get("token");
  return axios.create({
    // baseURL: "http://localhost:5010/api",
    // baseURL: "https://ed-backend.vercel.app/api",
    baseURL: "https://api.resonanceindore.com/api",
    headers: {
      "Content-Type": "Application/JSON",
      Accept: "*/*",
      Authorization: `Bearer ${token}`,
    },
  })
}