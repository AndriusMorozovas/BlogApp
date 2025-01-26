import {create} from 'zustand'

const useStore = create((set) => ({
    currentUser: {
        name: "",
        password: "",
        id: ""
    },
    setCurrentUser: (currentUser) => set({currentUser}),
    allPosts: [],
    addPost: (newPost) => set((state) => ({
        allPosts: [...state.allPosts, newPost]
    })),
    removePost: (index) => set((state) => ({
        allPosts: state.allPosts.filter((id, i) => i !== index)
    }))
}))

export default useStore;