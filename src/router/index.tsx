import {createHashRouter} from "react-router-dom";
import React, {Suspense} from "react";
import Error from '@/pages/Error.tsx'
//TODO:没做权限控制
const LazeComponent = (node: () => any) => {
    const Com = React.lazy(node)
    return (
        <Suspense>
            <Com></Com>
        </Suspense>
    )
}

export const router = createHashRouter([
    {
        path: '/',
        element: LazeComponent(() => import('../App.tsx')),
        errorElement: <Error/>,
        children: [
            // 显示子组件
            {
                path: '/child1',
                element: LazeComponent(() => import('@/pages/child/Child1.tsx'))
            },
            {
                path: '/about',
                element: LazeComponent(() => import('@/pages/About.tsx'))
            },
            {
                path: '/more',
                element: LazeComponent(() => import('@/pages/More.tsx'))
            },
            {
                path: '/rtk',
                element: LazeComponent(() => import('@/pages/Rtk.tsx'))
            },
        ]
    },
    {
        path: '/login',
        element: LazeComponent(() => import('@/pages/Login.tsx'))
    }

])
