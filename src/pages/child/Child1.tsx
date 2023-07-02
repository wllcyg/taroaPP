import {connect} from "react-redux";
import {State} from "@/redux/reducer";
import {changeNameAction, getHotcommit,fatchTopList} from "@/redux/actionCreaction";
import {useEffect} from "react";

interface Child extends State {
    changeName: (name: string) => void;
    get_hotComments: (hotcomments: []) => void;
    fetchHomeList:()=>void
}



function Child1(props: Child) {
    // 获取歌曲列表
    useEffect(() => {
        props.fetchHomeList()
    }, [])
    const changeNameAction = () => {
        props.changeName('赵六111111111111')
    }
    return (
        <>
            我是第一个子组件
            {props.name} {props.hotcomments.map(e => <li key={e.commentId}>{e.content}</li>)}
            <h3>
                <button onClick={changeNameAction}>更新名字</button>
            </h3>
        </>
    );
}

// 映射
function mapStateProps(state: State) {
    // 返回需要映射的内容
    return {
        name: state.name,
        hotcomments: state.hotcomments
    }
}

// 将dispatch 灌入peops
function mapDispatch(dispatch: any) {
    return {
        changeName(name: string) {
            dispatch(changeNameAction(name))
        },
        get_hotComments(hotcomments: []) {
            dispatch(getHotcommit(hotcomments))
        },
        fetchHomeList(){
            dispatch(fatchTopList())
        }
    }
}

// 高阶函数传递fn1函数,确定需要映射的数据
export default connect(mapStateProps, mapDispatch)(Child1);
