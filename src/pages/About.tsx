import {useLocation} from "react-router-dom";

export default function () {
    const {state} = useLocation() // 获取传递的参数刷新不丢失
    return (
        <>
            我是about组件{state.id}
            <h1>
                关于redux库的使用
            </h1>

        </>
    );
};
