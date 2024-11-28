const API_URL = 'https://reqres.in/api/users'

export const fetchUsers = async (page = 1) => {
    try {
        const response = await fetch(`${API_URL}?page=${page}`);
        const data = await response.json();
        return data.data; // returns the list of users
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

export const deleteUser = async (userId) => {
    try {
        const response = await fetch(`${API_URL}/${userId}`,{
            method:'DELETE',
        });

        if(!response.ok){
            throw new Error('failed to delete user')
        }
    } catch (error) {
        console.error('error deleting user:',error)
        throw error;
    }
}