import { createSlice } from '@reduxjs/toolkit'

export const loaddingReducer = createSlice({
    name: 'loadding',
    initialState: {
        value: false
    },
    reducers: {
        loadding: state => {
            state.value = true
        },
        loaded: state => {
            state.value = false
        },
    }
})

// Action creators are generated for each case reducer function
export const { loadding, loaded } = loaddingReducer.actions

/**
 * 我觉得这里不是拼写错误
 */
export default loaddingReducer.reducer