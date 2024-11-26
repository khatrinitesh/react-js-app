import { create } from "zustand";

export const useUserStore = create((set) => ({
    // users and setusers
    users:[],
    setUsers:(users) => set({users}),
    // loading and setloading
    isLoading:false,
    setLoading:(loading) => set({isLoading:loading}),
    // error and seterror
    error:null,
    setError:(error) => set({error})
}));