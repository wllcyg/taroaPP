import {Link, Outlet, useNavigate} from "react-router-dom";
import {NavigateQuery} from "@/utils/getQueryParams.ts";
import './App.css'


function App() {
    const naviteTo = useNavigate()
    const toOther = () => {
        naviteTo('/about', {
            state: {id: 12212}
        })
    }
    const toMore = () => {
        naviteTo(NavigateQuery({url: '/more', query: {id: 12, name: 'test1'}}))
    }
    const toRtk = () => {
        naviteTo(NavigateQuery({url: '/rtk', query: {id: 12, name: 'test1'}}))
    }
    return (
        <>
            <div>
                <button>
                    <Link to={'/child1'}>去child1</Link>
                </button>
                <button onClick={toMore}>
                    去more
                </button>
                <button onClick={toRtk}>
                    去RTK
                </button>
                <button onClick={toOther}>
                    <div className='name'>
                        去about
                    </div>
                </button>
                <Outlet/>
                <footer>
                    <input type="text" placeholder={'1111111111'}/>
                </footer>
            </div>
        </>
    )
}

export default App
