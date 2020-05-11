// 1.导入这两个包时，名称必须这么写
import React from 'react'
import ReactDOM from 'react-dom'

// 2.创建虚拟DOM元素
/**
 * 在JS中，默认不能写类似于HTML的标记
 * 可以使用babel转换这些JS中的标签
 * 这种在JS中，混合写入类似HTML的语法，叫做JSX语法，符合XML规范的JS
 */
const myDiv = <div id="myDiv">这是一个div元素</div>

// 3.使用React.render把虚拟DOM渲染到页面上
ReactDOM.render(myDiv, document.getElementById("app"))