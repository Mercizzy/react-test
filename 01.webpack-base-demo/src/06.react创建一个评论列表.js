// 1.导入这两个包时，名称必须这么写
import React from 'react'
import ReactDOM from 'react-dom'

import './css/main.css'

/**
 * 创建一个评论区列表
 */

//最外层的父组件
function Box() {
  let list = [
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
    {
      name: '张三',
      content: 'xxxxxxx'
    },
  ];

  return <div className="box">
    <ListTitle {...{ title: "XX列表" }}></ListTitle>
    <ListWrap list={ list }></ListWrap>
  </div>
}
//标题
function ListTitle(props) {
  return <div className="list-title"> {props.title} </div>
}
//列表的wrap
class ListWrap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      list: props.list
    }
  }

  render() {
    return <div className="list-wrap">
      { this.state.list.map((item, index)=> {
          return <ListItem item={ item } key={ index }></ListItem>
        }) 
      }
    </div>
  }
}
//列表单独的项
class ListItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      item: props.item,
    }
  }

  render() {
    return <div className="list-item">
      <div className="list-item-top">{ this.state.item.name } </div>
      <div className="list-item-bottom">{ this.state.item.content }</div>
    </div>
  }
}

const myDiv = <div id="myDiv">
  <Box></Box>
</div>

// 3.使用React.render把虚拟DOM渲染到页面上
ReactDOM.render(myDiv, document.getElementById("app")) 