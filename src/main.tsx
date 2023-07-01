import React from "react";
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import './index.css'
import {ThemeProvider} from "styled-px2vw";
// 定义全局主题颜色可以来进行更换
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
       <ThemeProvider theme={{size:'300px'}}>
           <RouterProvider router={router}/>
       </ThemeProvider>
    </React.StrictMode>,
)
