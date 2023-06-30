import {useLocation} from "react-router-dom";

export default () => {
    const {state} = useLocation() // 获取传递的参数刷新不丢失
    return (
        <>
            我是about组件{state.id}
        </>
    );
};
