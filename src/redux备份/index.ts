/**
 * 1. 核心状态 store
 * 2. action 更新数据
 * 3. dispatch派发action
 * 4. reduce
 * 5. 建议只存在一颗树
 * 6. 三大原则: 单一数据源  state只读  纯函数来进行修改
 * */
import {createStore, applyMiddleware, compose} from 'redux'
import reduce from "@/redux/reducer";
import thunk from "redux-thunk";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 实现reduce

export const store = createStore(reduce,componseEnhancers(applyMiddleware(thunk)))
