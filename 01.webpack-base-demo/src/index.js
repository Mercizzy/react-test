// 1.导入这两个包时，名称必须这么写
import React from 'react'
import ReactDOM from 'react-dom'

class ClickBox extends React.Component{
  constructor() {
    super()

    this.state = {
      count: 0,
      str: 'hello'
    }
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // this.setState(state => ({
    //   count: state.count+1
    // }));
    this.setState({
      count: this.state.count+1
    }, ()=> {
      // setState是异步，需要回调
    })
    console.log(this.state.count);
  }

  render() {
    return <div>
      { this.state.count } { this.state.str }
      <br />
      <button onClick={ ()=> { this.handleClick() } }>+1</button>
    </div>
  }
}

const myDiv = <div id="myDiv">
  <ClickBox></ClickBox>
</div>

// 3.使用React.render把虚拟DOM渲染到页面上
ReactDOM.render(myDiv, document.getElementById("app")) 