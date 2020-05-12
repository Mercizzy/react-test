// 1.导入这两个包时，名称必须这么写
import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './components/Hello'

let dog = {
  name: '大黄'
}

//使用class关键字继承创造组件
class Haha extends React.Component {
  constructor(props) {
    super(props)
    //相当于Vue中的data() { return {} }
    this.state = { 
      text: 'click me'
    }
    this.click = this.click.bind(this)
  }
  click(){
    console.log(111);
    
    this.setState(()=> {
      this.state.text = 'clicked'
    })
  }
  render() {
    return <div onClick={this.click}> {this.state.text} </div>
  }
}

const myDiv = <div id="myDiv">
  <Hello {...dog}></Hello>
  <Haha {...dog}></Haha>
</div>

// 3.使用React.render把虚拟DOM渲染到页面上
ReactDOM.render(myDiv, document.getElementById("app")) 