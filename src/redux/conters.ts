import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 100
    },
    reducers:{
        addNum(state,action){
            // 最后执行赋值操作
            state.counter = state.counter + action.payload
        },

    }
})
export const { addNum } = counterSlice.actions
export default counterSlice.reducer
