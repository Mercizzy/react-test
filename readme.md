### 组件化方面

1. **什么是模块化开发：**是从**代码**角度来进行分析的；把一些可复用的代码，抽离为单个的模块；便于项目维护和开发；

2. **什么是组件化：** 是从**`UI`界面**的角度来进行分析的；把一些可复用的`UI`元素，抽离为单独的组件；便于项目的维护与开发；
3. **组件化的好处：** 随着项目规模的增大，手里的组件越来越多，很方便就能利用现有的组件，完成业务功能；
4. **Vue是如何实现组件化：** 通过`.vue`文件，来创建对应的组件；
   + template	结构
   + script          行为
   + style            样式

5. **React如何实现组件化：** React中，一切都是以JS来实现的；



### Recact中的几个核心概念

#### 虚拟DOM（Virtual Document Object Model）

* **DOM的本质是什么：**浏览器中的概念，用JS对象标识页面上的元素，并提供了操作DOM对象的API；

* **什么是React中的虚拟DOM：**是框架中的概念，是程序员用JS对象来模拟页面上的DOM和DOM嵌套；

  ```html
  <div id="app" class="myApp">
    hello World
    <p class="p1">
      你好，世界
    </p>
  </div>
  ```

  通过JS模拟上面的元素

  ```js
  let app = {
    "tagName": "div",
    "attrs": {
      "id": "app",
      "class": "myApp",
      "children": [
        "hello world",
        {
        	"tagName": "p",
        	"attrs": {
        		"class": "p1",
        		"children": [
        			"你好，世界"
      			]
        	}
        }
      ]
    }
  }
  ```

* **为什么要实现虚拟MDOM：**为了实现页面中，DOM元素的高效更新;

* **DOM和虚拟DOM的区别：**

  * **DOM：**浏览器提供的概念；用JS对象表示页面上的元素，并提供了操作元素的API；
  * **虚拟DOM：**是框架中的概念；是开发框架的程序员，手动用JS对象来模拟DOM元素和嵌套关系；
    * 本质：用JS对象，来模拟DOM元素和嵌套关系；
    * 目的：为了实现页面元素的高效更新；

#### Diff算法

* **tree diff：**新旧两棵树DOM树，逐层对比的过程，就是Tree Diff；当整颗DOM树逐层对比完毕，则所有需要被按需更新的元素，必然能够找到；
* **component diff：**在进行Tree Diff的时候，每一层中，组件级别的对比，叫做Component Diff；
  * 如果对比前后，组件的类型相同，则**暂时**认为此组件不需要被更新；
  * 如果对比前后，组件的类型不同，则需要移除旧组件，创建新组件，并追加到页面上；
* **element diff：**在进行Component Diff的时候，如果两个组件类型相同，则需要进行元素级别的对比，这叫做Element Diff；



### 创建基础的Webpack项目

1. `npm init --yes`初始化
2. dist，src，index.html，index.js
3. 安装webpack，`cnpm i webpack webpack-cli -D`
4. 4.x中特性：约定大于配置，默认入口文件`src/index.js`，默认打包路径`dist/main.js`

### 在项目中使用React

1. 运行`npm i react react-dom -S`

2. 在`index.html`页面中创建容器

   ```html
   <div id="app">
     
   </div>
   ```

3. 导入包

   ```js
   import React from 'react'
   import ReactDOM from 'react-dom'
   ```

4. 创建虚拟元素

   ```react
   const myDiv = React.createElement('div', null, 'this is a div')
   ```

5. 渲染元素

   ``````react
   ReactDOM.render(myDiv, document.getElementById(app))
   ``````

### 在项目中使用jsx

1. 引入babel，注意babel更新8.x以后，与之前大不相同
2. jsx语法