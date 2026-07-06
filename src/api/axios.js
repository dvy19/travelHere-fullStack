import axios from "axios";

const api = axios.create({
    baseURL: "https://travel-guide-116q.onrender.com/",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
