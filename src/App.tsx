import './App.css'
import {login, sentCaptcha} from "./api/login.ts";
import {useEffect} from "react";
import {Button} from 'react-vant';

function Params() {
    useEffect(() => {
        login({id: 186016, limit: 1}).then(val => {
            console.log(val)
        })
    }, [])
    return (
        <div className='names'>
            我是张三
        </div>
    )
}

function App() {
    const getCaptcha = async () => {
        const res = await sentCaptcha({phone: '15978738332'})
        console.log(res)
    }
    return (
        <>
            <Button type='primary' onClick={getCaptcha}>点击获取验证码</Button>
            <Params/>
        </>
    )
}

export default App
