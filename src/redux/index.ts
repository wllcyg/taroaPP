/**
 * 1. 核心状态 store
 * 2. action 更新数据
 * 3. dispatch派发action
 * 4. reduce
 * 5. 建议只存在一颗树
 * 6. 三大原则: 单一数据源  state只读  纯函数来进行修改
 *
 *
 *
 * RTK
 * 1. configureStore
 * 2. createSlice
 * 3. createAsyncThunk
 *
 *
 * */
import { configureStore } from '@reduxjs/toolkit'
import counterReduce from "@/redux/conters";
import home from "@/redux/home";

export const store = configureStore({
    reducer:{
        counter:counterReduce,// counte模块
        home
    }
})
