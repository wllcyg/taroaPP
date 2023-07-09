import {connect} from "react-redux";
import {addNum} from "@/redux/conters";
import {getListData} from "@/redux/home";
import {getMusic} from "@/redux/home";
function Rtk(props:any) {
    const {counter,addNumberHandle,listArr,getMusicAction} = props
    console.log(listArr,'11111')
    const handleGetMusic = () => {
        addNumberHandle(121111)
        getMusicAction()
    }
    return (
        <>
            RTK使用文件{counter}
			<button onClick={handleGetMusic}>点击添加数据</button>
            {
                listArr.map(e => {
                    return <li key={e.commentId}>{e.content}</li>
                })
            }
        </>
    )
}

const mapStateToProps = (state: any) => ({
    counter: state.counter.counter,
    listArr:state.home.listArr
})
const mapDiapatchToProps = (dispatch:any) => ({
	addNumberHandle(num:any){
		dispatch(addNum(num))
	},
    getMusicAction(){
        dispatch(getMusic())
    }
})
export default connect(mapStateToProps,mapDiapatchToProps)(Rtk)
