# vuepress-theme-bb

> This plugin requires VuePress >= **1.0.0**

A vuepress blog theme extends from [@vuepress/theme-default](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/theme-default/README.md)

[中文说明](./zh/README.md) | [Demo](https://blog.sanbaofengs.com)

## Features

- Tiny
- Remove sidebar

## Install

```bash
npm i vuepress-theme-bb
```

## Usage

### Using this theme:

```js
// .vuepress/config.js
module.exports = {
    theme: 'vuepress-theme-bb'
}
```

### Config

Everything stays the same as [default](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html)

**Expect**:
- Sidebar: No such thing.
- Nav: No such thing.
- Home page: It has been written. All you need write is
    ```
    ---
    home: true
    about: path-to-your-about-page
    ---
    ```

## Development

```bash
git clone https://github.com/x-bao/vuepress-theme-bb
cd vuepress-theme-bb
yarn
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :P


## Author

**vuepress-theme-bb** © [San Baofeng](https://github.com/x-bao), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by San Baofeng

> [San Baofeng's](https://arts.sanbaofengs.com) · GitHub [@San Baofeng](https://github.com/x-bao) · Twitter [@Baofeng15](https://twitter.com/Baofeng15)
