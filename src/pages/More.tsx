import {useLocation} from "react-router-dom";
import {getQueryParasm} from "@/utils/getQueryParams.ts";
import "./index.less";
import {AppWraper} from "@/pages/style/style";
import {useState} from "react";
import  classNames from "classnames"; // 动态实现类名的添加
export default function () {
    const location = useLocation();
    console.log(getQueryParasm(location.search));
    const [width, setWidth] = useState("750");
    const [color, setColor] = useState("red");
    const [hasText, setHasText] = useState(false);
    const changSize = () => {
        setWidth("300");
        setColor("green");
        setHasText(true)
    };
    // 定义尺寸传入组件
    return (
        <AppWraper color={color} size={width}>
            <span className="title">我是more组件</span>
            <div className="is-footer">我是根组件</div>
            <button className={classNames("btnclass",{textcolor:hasText})} onClick={changSize}>点击更改尺寸</button>
        </AppWraper>
    );
};
