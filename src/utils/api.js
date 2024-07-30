import axios from "axios";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
  },
});
export default api;
