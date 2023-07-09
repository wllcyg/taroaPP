import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {musicList} from "@/api/login";

// 三种异步状态   pending   fulfilled(获取了最终的结果) rejected  三种状态
export const getMusic = createAsyncThunk('getMusicAction',async () => {
    const res = await musicList({id: 186016, limit: 1})
    console.log(res,'111111111.获取的数据函数')
    return res
})

const homeSlice = createSlice({
    name:'home',
    initialState:{
        listArr:[]
    },
    reducers:{
        getListData(state,{payload}){
            state.listArr = payload
        }
    },
    // extraReducers:{
    //     [getMusic.fulfilled](state,{payload}){
    //         state.listArr = payload.hotComments
    //         console.log(33333,state,payload)
    //     }
    // }
    // 另一种写法
    extraReducers:(builder) => {
        builder.addCase(getMusic.fulfilled,(state,action) => {
            state.listArr = action.payload.hotComments
        })
    }
})
export const { getListData } = homeSlice.actions
export default homeSlice.reducer
