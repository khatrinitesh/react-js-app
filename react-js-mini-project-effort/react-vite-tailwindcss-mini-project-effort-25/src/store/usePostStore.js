import { create } from 'zustand'

const usePostStore = create((set) => ({
    posts: [],
    loading: false,
    error: null,
    fetchPosts: async () => {
      set({ loading: true, error: null })
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        set({ posts: data, loading: false })
      } catch (err) {
        set({ error: err.message, loading: false })
      }
    }
  }))
  
  export default usePostStore