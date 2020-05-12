import React from 'react'

function Hello(prpos) {
  // prpos.name = '' 
  //组件中的参数是只读的

  return <div> 这是Hello组件 {prpos.name} </div>
}

export default Hello