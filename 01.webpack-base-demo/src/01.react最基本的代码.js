// console.log('haha');

// webpack-server-dev 打包好的main.js是在内存中的

// 1.导入这两个包时，名称必须这么写
import React from 'react'
import ReactDOM from 'react-dom'

// 2.创建虚拟DOM元素
/**
 * 
 */
const myH1 = React.createElement(
  'h1', 
  {
    "id": 'myH1',
    "title": 'hhhhh'
  }, 
  '这是一个大大的h1'
);

const myDiv = React.createElement(
  'div',
  null,
  '这是一个div',
  myH1
);

// 3.使用React.render把虚拟DOM渲染到页面上
ReactDOM.render(myDiv, document.getElementById("app"))