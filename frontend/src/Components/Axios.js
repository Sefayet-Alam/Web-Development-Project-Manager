// Axios.js
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/'; // Adjust this to your Django API URL
const AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        accept: "application/json"
    }
});

export default AxiosInstance;
