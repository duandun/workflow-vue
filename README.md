# LeSports cms 前端代码

基于 Vue2.0的SPA应用，采用webpack进行构建。


## 架构参考列表：
* [Vue-cnodejs](https://github.com/shinygang/Vue-cnodejs)
* [vue-spa-template](https://github.com/hanan198501/vue-spa-template)
* [vue-mis](https://github.com/zhuchongyue/vue-mis)

## 相关手册
* [Vue2.0 英文文档](https://vuejs.org/guide/)
* [Vue2.0 中文文档](https://vuefe.cn/guide/)
* [vue-router 2英文文档](https://router.vuejs.org/en/)
* [vue-router 2中文文档](https://router.vuejs.org/zh-cn/)
* [VueX 2.0 英文文档](https://vuex.vuejs.org/en/index.html)
* [VueX 2.0 中文文档](https://vuefe.cn/vuex/)


## 安装

通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))
需要node 4+，npm 3.0+
```
npm install
```

启动服务(http://localhost:8090)

```
npm start
```

发布代码
```
npm run build
```

## 开发

## 目录结构
<pre>
.
├── README.md           
├── dist               // 项目build之后生成的文件目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 全局性的css js 和图片资源
│   ├── components     // 各种组件
│   ├── pages          // 各种页面
│   ├── vuex           // vuex状态管理器
│   ├── filters.js     // 各种过滤器
│   └── main.js        // Webpack 预编译入口
├── server.js          // webpack-dev-server服务配置
└── webpack.config.js  // Webpack 配置文件
</pre>


## 设计总体原则
> 1. 总体上的原则是`分而治之，简单易用`;
> 2. 所谓`分而治之`是把复杂的东西拆分一个个小的组件，每一个页面都是一个个组件拼装而成，通过这样来降低总体的复杂度;
> 3. 所谓`简单易用`是指在拆分的同时要保持简单易用，过渡拆分的后果是修改一个简单的组件都要分别要去好几个地方去修改，增加了维护的复杂度，所以要根据组件的实际情况和复杂度来确定是否需要拆分，例如每一个组件依赖的图片，我建议直接放在组件自身的`images`目录下，而不是放到assets里面。

举个例子：如果我们要造一个`机器人`，我们一般不把整个机器人整体做出来，而是拆分成`头，身体，胳膊`等组件，然后分别制造，最后组装成一个机器人；但是一般我们不会把机器人的`指甲`拆分成`指甲本身，指甲的颜色，指甲的长度...`,而是把`指甲`这个最小组件一块进行制造。



