const path = require('path')

module.exports = {
    title: "Vuepress theme's bb",
    theme: path.resolve(__dirname, '../../src/'),
    plugins: [
        ['vuepress-plugin-new']
    ]
};
