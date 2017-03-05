# LeSports cms 前端代码

基于 Vue2.0的SPA应用，采用webpack进行构建。


## 架构参考列表：
* [Vue-cnodejs](https://github.com/shinygang/Vue-cnodejs)
* [vue-spa-template](https://github.com/hanan198501/vue-spa-template)

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
