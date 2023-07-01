import styled from 'styled-px2vw';
import { px2vw } from 'styled-px2vw';
interface StyleObj {
    size:string;
    color?:string;
}
// 模板字符串可以调用函数
// 动态修改style参数,attrs可以默认传参
// styled(其他元素)实现继承
export const AppWraper = styled.div.attrs(props => {
    return {
        colorValue:props.color || 'blue'
    }
})<StyleObj>`

  .title {
    color: white;
    width: ${props => px2vw(props?.size)};
    background: ${props => props.colorValue};
    display: block;
    transition: all 1s;
  }

  .is-footer {
    color: red;
    height: 100px;
  }

  .btnclass {
    width: ${props => props.theme.size};
  }

  .textcolor {
    color: green;
  }
`
