import { configureStore } from '@reduxjs/toolkit'
import loaddingReducer from "./feature/loaddingSlice"

export default configureStore({
    reducer: {
        loadding: loaddingReducer
    }
})