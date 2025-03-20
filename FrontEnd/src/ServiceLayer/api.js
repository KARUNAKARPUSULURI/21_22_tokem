import axios from 'axios';
import { getProductsUrl, postLoginUrl, postRegisterUrl } from "./constants";

const apiClient = axios.create({
    baseURL: 'http://localhost:3000', 
    timeout: 1000,
});

const methods = {
    GET: async (url) => {
        try {
            const response = await apiClient.get(url);
            return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            throw error.response ? error.response.data : error.message;
        }
    },
    POST: async (url, payload) => {
        try {
            const response = await apiClient.post(url, payload);
            return response.data;
        } catch (error) {
            console.error("Error posting data:", error);
            throw error.response ? error.response.data : error.message;
        }
    }
};

const getProductsData = () => methods.GET(getProductsUrl);
const postRegisterData = (payload) => methods.POST(postRegisterUrl, payload);
const postLoginData = (payload) => methods.POST(postLoginUrl, payload);

export { getProductsData, postRegisterData, postLoginData };
