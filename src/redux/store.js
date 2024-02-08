import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './features/blogs/blogsSlice'
import blogReducer from './features/singleBlog/blogSlice'

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        blog: blogReducer
    },
})