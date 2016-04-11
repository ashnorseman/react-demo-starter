# React Demo

## Eslint 配置 ##

写代码之前先搞定 Eslint 是好习惯。从之前的项目里拷贝 `.eslintrc` 和 `.eslintignore` 过来即可。

React 专有的配置，可参考 [eslint-plugin-react][1]。

## 安装 React ##

```
npm install -S react react-dom
```

众所周知，React 只是一个视图层，光靠它当然跑不起整个业务。其他依赖按需安装即可。

```
npm install -S react-router react-addons-css-transition-group redux react-redux redux-thunk
```

## Webpack 环境搭建 ##

1\. 安装 webpack、express 及启动开发服务需要的基础依赖包。

```
 npm install -D webpack webpack-dev-middleware webpack-hot-middleware express
```

2\. 我们需要为 webpack 添加配置文件。一般来说，webpack 的配置会分为开发（dev）和打包（build）两个配置。而开发环境又会分为本地数据 mock 和远程连接开发数据库两种情况。但基本上大同小异。

在写 webpack 配置之前，还要安装几个必需的 [loader][2]。

模块/文件加载：

```
npm install -D file-loader html-loader image-webpack-loader url-loader
```

Eslint 相关：

```
npm install -D eslint eslint-friendly-formatter eslint-loader eslint-plugin-react
```

SASS、CSS 相关：

```
npm install -D node-sass sass-loader css-loader style-loader
```

Babel 相关：

```
npm install -D babel-core babel-eslint babel-loader babel-preset-es2015 babel-preset-react babel-plugin-transform-decorators-legacy
```

3\. 安装一些 [plugin][3]

```
npm install -D clean-webpack-plugin eslint-plugin-react extract-text-webpack-plugin html-webpack-plugin
```

4\. React 开发工具

```
npm install -D react-transform-hmr react-transform-catch-errors babel-plugin-react-transform
```

5\. 公共的 webpack 配置

由于 webpack 不同环境下相同的配置非常多，可以先提取一个 `webpack-common-config.js`

主要包括：代码审查、程序入口、HTML 模板、图片字体的加载、SASS 的解析、Babel 编译……等等。

6\. Dev Server

在公共配置的基础上，添加开发专用的配置。

区分本地 / 远程数据源，使用不同的 server：

```javascript
// 如果使用的命令是 npm run connect，则为 server 配置路径
if (process.env.npm_lifecycle_event === 'connect') {
	server = 'http://localhost:9090';
}
```

7\. 分别创建 `webpack-dev-config.js` 和 `webpack-build-config.js`（在 `webpack-common-config.js`）的基础上，做微小的改动。

8\. 在根目录下创建 `server.js`，作为开发服务的入口。

9\. 在 `package.json` 里加入相应的命令：

```javascript
"scripts": {

    // 打包
	"build": "NODE_ENV=production BABEL_ENV=production webpack --config webpack-build-config.js",

	// 开发：本地数据
	"start": "NODE_ENV=development node server",

	// 开发：数据库服务
	"connect": "NODE_ENV=development node server"
}
```

## 单元测试环境搭建 ##

参考：[Javascript Test Demo][4]，但要额外安装 React 和 React 测试组件。

```
npm install -D jasmine-core webpack karma karma-jasmine karma-chrome-launcher karma-webpack react-addons-test-utils
```

运行 `karma init`，最后结果参考[这里][5]。注意，webpack 的配置直接引用公共配置项即可。

最后莫要忘记加上：

```javascript
"scripts": {
    "test": "BABEL_ENV=production karma start"
}
```

于是就可以愉快地开发了~

## 目录结构 ##

在完成上述全部工作之后，目录结构应该是这样的：

```
src
    app.js          // 程序入口
    index.tpl.html  // 模板
test
    index.js
```

组织目录的形式多种多样，如果用 redux 的话，推荐这么搞：

```
src
    actions             // Action
    ajax                // 后台交互相关代码
    components          // 组件
        DemoComponnet
            __test__
            index.js
    containers          // 页面组件，一般和 router 对应
    reducers            // Reducer
        __test__
        demoReducer.js
        index.js        // combineReducers
    styles              // 样式
        _global.scss
        _variables.scss
        app.scss
    mock                    // 数据 Mock
        data
        index.js
    constants.js        // 常量
    app.js
    index.tpl.html
test
    index.js
```

具体的组件、Action、Reducer 的 demo 及测试可参考目录下的文件。

  [1]: https://github.com/yannickcr/eslint-plugin-react
  [2]: https://webpack.github.io/docs/using-loaders.html
  [3]: https://webpack.github.io/docs/using-plugins.html
  [4]: https://github.com/ashnorseman/javascript-test-demo
  [5]: https://github.com/ashnorseman/javascript-test-demo/blob/master/karma.conf.js
