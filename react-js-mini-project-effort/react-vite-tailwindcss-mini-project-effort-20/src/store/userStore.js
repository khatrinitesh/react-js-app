import { create } from "zustand";
import { deleteUser, fetchUsers } from "../api/userService";

export const useUserStore = create((set) => ({
    users:[],
    loading:false,
    error:null,
    fetchUsers:async (page) => {
        set({
            loading:true,
            error:null
        });
        try {
            const users = await fetchUsers(page);
            set({
                users,
                loading:false
            })
        } catch (error) {
            set({
                error:'failed to fetch users',
                loading:false
            })
        }
    },
    deleteUser:async(userId) => {
        try {
            await deleteUser(userId);
            set((state) => ({
                users:state.users.filter((user) => user.id !== userId),
            }));
        } catch (error) {
            set({
                error:'failed to delete user'
            })
        }
    },
}))