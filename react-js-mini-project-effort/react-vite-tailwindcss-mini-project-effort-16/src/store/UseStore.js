// global store data other component useing  state managemnent

import { create } from "zustand";

const useStore = create((set) => ({
    user:null, // or initial state 
    setUser:(user) => set({user}),
    loading:false,
    setLoading:(loading) => set({loading}),
    // add more state variables and actions as needed
}))

export default useStore;