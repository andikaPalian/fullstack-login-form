import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    timeout: 10000,
    withCredentials: true,
});

// Menambahkan token ke header
axiosInstance.interceptors.request.use((config) => {
    // Ambil token dari local storage
    const token = localStorage.getItem("token"); 
    if (token) {
        console.log("Token found:", token);
        console.log("Request config:", {
            url: config.url,
            method: config.method,
            headers: {
                ...config.headers,
                Authorization: `Bearer ${token}`
            }
        });
        // Tambahkan token ke header
        config.headers.Authorization = token.startsWith("Bearer ") ? token : `Bearer ${token}`; 
    } else {
        console.warn("No token found");
    };
    return config;
}, (error) => {
    console.error("Request error:", error.message);
    return Promise.reject(error);
});

export default axiosInstance;