# React 练习项目

这是一个包含井字棋游戏和产品筛选表的 React 练习项目。

## 项目功能

### 井字棋游戏
- 支持 X 和 O 两个玩家轮流下棋
- 自动判断获胜者
- 支持历史记录回放
- 可以跳转到任意历史步骤

### 产品筛选表
- 支持按名称搜索产品
- 可以筛选仅显示有库存的商品
- 按类别分组显示产品
- 缺货商品显示红色提示

## 技术栈

- React 19
- Create React App
- CSS3
- Web Vitals

## 开发环境配置

1. 克隆项目到本地
2. 运行 `npm install` 安装依赖
3. 运行 `npm start` 启动开发服务器

## 可用脚本

### `npm start`

在开发模式下运行应用。
打开 [http://localhost:3000](http://localhost:3000) 在浏览器中查看。

当你修改代码时，页面会自动重新加载。
你也可以在控制台中查看任何代码错误。

### `npm test`

以交互式监视模式启动测试运行程序。

### `npm run build`

将应用程序构建到 `build` 文件夹中用于生产环境。
它会在生产模式下正确打包 React，并优化构建以获得最佳性能。

### `npm run eject`

**注意：这是一个单向操作。一旦你执行 `eject`，就无法回退！**

如果你需要完全控制项目的构建配置，可以使用此命令。

## 项目结构

```
src/
  ├── components/
  │   ├── TicTacToe/       # 井字棋游戏组件
  │   └── FilterableProductTable/  # 产品筛选表组件
  ├── App.js               # 应用程序入口组件
  └── index.js            # 项目入口文件
```

## 许可证

本项目采用 MIT 许可证。详情请查看 [LICENSE](LICENSE) 文件。
