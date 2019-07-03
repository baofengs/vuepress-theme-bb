# vuepress-theme-bb

> This plugin requires VuePress >= **1.0.0**

基于 [@vuepress/theme-default](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-default/README.md) 扩展的博客主题

[中文说明](./zh/README.md)  |  [Demo](https://blog.sanbaofengs.com)

## Features

- 极简
- 移除了没啥用的东西

## 安装

```bash
npm i vuepress-theme-bb
```

## 使用

### 设置主题:

```js
// @file .vuepress/config.js
module.exports = {
    theme: 'vuepress-theme-bb'
}
```

### 配置

基本和[默认](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)保持一致

**除了**:
- 侧边栏: 干掉了
- 导航: 重写了
- 首页: 重写了, 必须得有 *README.md*
    ```md
    <!-- @file README.md -->
    ---
    home: true
    about: path-to-your-about-page
    ---
    ```

## 开发

```bash
git clone https://github.com/x-bao/vuepress-theme-bb
cd vuepress-theme-bb
yarn
```

## 贡献

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :P


## Author

**vuepress-theme-bb** © [San Baofeng](https://github.com/x-bao), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by San Baofeng

> [San Baofeng's](https://arts.sanbaofengs.com) · GitHub [@San Baofeng](https://github.com/x-bao) · Twitter [@Baofeng15](https://twitter.com/Baofeng15)
