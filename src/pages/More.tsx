import {useLocation} from "react-router-dom";
import {getQueryParasm} from "@/utils/getQueryParams.ts";


export default () => {
    const location = useLocation()
    console.log(getQueryParasm(location.search))
    return (
        <>
            我是more组件
        </>
    );
};
