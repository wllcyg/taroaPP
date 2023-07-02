import {CHANGE_NAME, GET_HOTCOMMENTS} from "@/redux/constants";
import {musicList} from "@/api/login";

interface ResInterface {
    hotComments: [];
    code: number;
}

export const changeNameAction = (name: string) => {
    return {
        type: CHANGE_NAME,
        name
    }
}
export const getHotcommit = (hotcomments: []) => {
    return {
        type: GET_HOTCOMMENTS,
        hotcomments
    }
}
// 调用异步方案
export const fatchTopList = () => {
    async function foo(dispatch:any) {
        // 获取数据来进行后续操作
        const res: ResInterface = await musicList({id: 186016, limit: 1})
        // 下面开始进行同步的dispatch调用,将函数值返回
        dispatch(getHotcommit(res.hotComments))
    }
    return foo
}
