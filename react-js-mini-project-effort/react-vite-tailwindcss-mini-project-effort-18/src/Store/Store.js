import { create } from "zustand";

const UseStore = create((set) =>({
    apiData:null, // 1
    isLoading:false, // 2
    error:null, // 3
    fetchData:async () =>{ //4
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts') // example api 
            const data = await response.json();
            set({
                apiData:data,
                isLoading:false
            })
        } catch (error) {
            set({
                error:error.message,
                isLoading:false,

            })
        }
    },

    // add a delete function to remove an item by id
    deleteItem:id => set((state) =>({
        apiData:state.apiData.filter((item) => item.id !== id)
    }))
}))

export default UseStore;