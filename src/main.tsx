import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import './index.css'
import {Provider} from "react-redux";
import {ThemeProvider} from "styled-px2vw";
import {store} from "@/redux"; // 将store 作为高阶组件来进行使用
// 定义全局主题颜色可以来进行更换
// 将store传递进来
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <ThemeProvider theme={{size: '300px'}}>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </ThemeProvider>
)
