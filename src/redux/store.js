import { configureStore } from "@reduxjs/toolkit";
import todos from './todoSlice'

export const store = configureStore({
    reducer: {
        todos

    }
})

