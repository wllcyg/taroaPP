import {CHANGE_NAME,GET_HOTCOMMENTS} from "@/redux/constants";
export interface State{
    name:string | unknown;
    hotcomments:any[]
}
// 1.初始数据
const initialState = {
    name:'张三',
    hotcomments:[]
}

// 2. reduce
interface ActionInterface {
    name?: string;
    type:string;
    hotcomments?:[];
}
function reduce(state:State = initialState,action:ActionInterface) {
    if (action.type === CHANGE_NAME){
        return  {...state,name:action.name}
    }
    if (action.type === GET_HOTCOMMENTS){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return {...state,hotcomments:[...action.hotcomments]}
    }
    return state
}
export default reduce
