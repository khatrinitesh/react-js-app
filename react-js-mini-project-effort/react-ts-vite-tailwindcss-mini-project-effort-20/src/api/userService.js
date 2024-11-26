import axios from "axios";

export const fetchUsers = async (page = 1) => {
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    return response.data.data; // returning the 'data' array from the API response 
}