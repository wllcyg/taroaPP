import {useLocation} from "react-router-dom";
import {store} from "@/redux";
import {useEffect, useState} from "react";
// 创建action的函数
import {changeNameAction} from "@/redux/actionCreaction";


export default function () {
    const [name, setName] = useState('');
    const {state} = useLocation(); // 获取传递的参数刷新不丢失

    useEffect(() => {
        console.log('name', store.getState().name)
        setName(store.getState().name as string)
        const sub = store.subscribe(() => {
            setName(store.getState().name as string)
            console.log("订阅了数据");
        });
        return () => {
            sub();
        };
    }, []);
    const changeName = () => {
        // 派发普通的对象
        store.dispatch(changeNameAction('王五!!!!'));
    };
    return (
        <>
            我是about组件{state.id}
            <h1>
                关于redux库的使用{name}
            </h1>
            <button onClick={changeName}>更改state</button>
        </>
    );
};
