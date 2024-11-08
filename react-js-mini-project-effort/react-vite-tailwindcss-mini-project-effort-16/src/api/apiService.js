// api integration and backend server.

import axios from "axios";

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts',
    headers:{
        'Content-type':'application/json',
    },
});

export const fetchUserData = async (userId) => {
    try {
        const response = await api.get(`/users/${userId}`)
        return response.data;
    } catch (error) {
        console.error('error fetching user data',error);
        throw error;
    }
}
