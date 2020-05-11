// 1.导入这两个包时，名称必须这么写
import React from 'react'
import ReactDOM from 'react-dom'

// 2.创建虚拟DOM元素
let a = 10
let arrStr = ['apple', 'orange', 'pear']
const myDiv = <div id="myDiv">
  {a}
  <hr />
  {arrStr.map(element => {
    return <p>{element}</p>
  })}
</div>

// 3.使用React.render把虚拟DOM渲染到页面上
ReactDOM.render(myDiv, document.getElementById("app"))