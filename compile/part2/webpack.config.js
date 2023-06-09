// 引入一个包
const path = require('path');
// 引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {

  // 指定入口文件
  entry: "./src/index.ts",

  // 指定打包文件所在的目录
  output: {
    // 指定打包文件所在的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后的文件
    filename: "bundle.js",
    // 编译后的js文件不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },

  // 指定webpack打包时要使用的模块
  module: {
    // 指定要加载的规则
    rules: [
      {
        // test 指定的是规则生效的文件
        test: /\.ts$/,
        // 要使用的loader
        use: [
            // 配置babel
          {
            // 指定加载器
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义环境
              preset: [
                [
                  // 指定环境的插件
                  '@babel/preset-env',
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      'chrome': '68',
                      "ie": '11'
                    },
                    // 指定corejs的版本
                    'corejs': '3',
                    // 使用corejs的方式 'usage'表示按需加载  （为不支持某一个模块的浏览器提供上对应的东西，比如ie低版本没promise，配置上这个会给ie重写上）
                    'useBuiltIns': 'usage'
                  }
                ]
              ]
            }
          },
          'ts-loader'   // 从后往前找loader
        ],
        // 要排除的文件
        exclude: /node_modules/
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'html文件title名字',
      // template: './src/index.html', // 自定义生成的网页模板
    }),
    new CleanWebpackPlugin()   // 编译时先把原来的dist目录清空
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.js', '.ts']
  }

}