import axios from 'axios';

export const baseURL="https://chat-back-latest.onrender.com";

export const httpClient= axios.create({
    baseURL:baseURL,
});