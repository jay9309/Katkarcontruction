import axios from "axios";

const apiBaseUrl =
    import.meta.env.VITE_API_URL ||
    "https://katkarcontruction.vercel.app/api";

const api = axios.create({
    baseURL: apiBaseUrl
});

export default api;