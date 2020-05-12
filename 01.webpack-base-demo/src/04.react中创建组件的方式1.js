// 1.导入这两个包时，名称必须这么写
import React from 'react'
import ReactDOM from 'react-dom'

// 渲染组件的第一种方式
function Hello(prpos) {
  // prpos.name = '' 
  //组件中的参数是只读的

  return <div> 这是Hello组件 {prpos.name} </div>
}
let dog = {
  name: '大黄'
}

const myDiv = <div id="myDiv">
  {/* <Hello name={dog.name}></Hello> */}
  <Hello {...dog}></Hello>
</div>

// 3.使用React.render把虚拟DOM渲染到页面上
ReactDOM.render(myDiv, document.getElementById("app"))