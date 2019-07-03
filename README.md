# README

三个独立的工程

#### component

`component`是基于Vue-cli v3.8.4生成的，里面没有删改已有的文件，只是增加了文件和命令。

在`src/components`里增加了一个`Button.vue`组件，在`src`中添加了一个`index.js`，作为打包的入口文件，用于将`Button`组件导出。

在`package.json`的`scripts`字段中添加了`build:ssr`命令和`main`命令。

`"main": "dist/lib/index.umd.js",`

`"build:ssr": "vue-cli-service build --target lib --name lib/index src/index.js --mode server"`

我不确定各个参数有没有写对，但至少运行起来是没问题的。

然后将`component`工程作为npm包发布，包名是`vue-components-ssr-demo`

#### csr

基于Vue-cli v3.8.4 默认配置生成的客户端渲染工程，直接安装`vue-components-ssr-demo`包并使用。

在`csr`工程运行`yarn serve`即可看到效果。

![image-20190703095935900](https://ws2.sinaimg.cn/large/006tNc79gy1g4mf4fkxzoj30cd08n3yw.jpg)

#### ssr

基于Nuxt生成的服务端渲染工程，安装并使用了`element-ui`，但是用同样的方式引入和配置`vue-components-ssr-demo`则报错。

![image-20190703095915076](https://ws1.sinaimg.cn/large/006tNc79gy1g4mf44594oj30fn0b2aab.jpg)

希望能找出正确的打包方式或配置，让csr和ssr同时生效。