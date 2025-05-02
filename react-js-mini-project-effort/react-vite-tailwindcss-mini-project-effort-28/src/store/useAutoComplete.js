import { create } from "zustand";


export const useAutoComplete = create((set) => ({
    query:'',
    setQuery:(q) => set({query:q}),
}))

export default useAutoComplete;