var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var TEM_PATH = path.resolve(ROOT_PATH, 'templates');

module.exports = {
    
    entry: {
        index: path.resolve(APP_PATH, 'views/index/index.js'),
        vendors: []
    },

    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
    
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        proxy: {
          '/api/*': {
              target: 'http:m.tuniu.com',
              secure: false
          }
        }
    },
    jshint: {
        "esnext": true
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
              test: /\.(woff2?|otf|eot|svg|ttf)$/i,
              loader: 'url?name=fonts/[name].[ext]'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH
            }
        ],
        perLoaders: [
            {
                test: /\.jsx?$/,
                include: APP_PATH,
                loader: 'jshint-loader'
            }
        ]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [

        //创建了两个HtmlWebpackPlugin的实例，生成两个页面
        new HtmlwebpackPlugin({
            title: '国内用车',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['index', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),

        //这个使用uglifyJs压缩你的js代码
        // new webpack.optimize.UglifyJsPlugin({minimize: true}),

        //把入口文件里面的数组打包成verdors.js
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),

        //provide $, jQuery and window.jQuery to every script
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        // new webpack.HotModuleReplacementPlugin(),

        // new webpack.NoErrorsPlugin(),

        new ExtractTextPlugin('font.css')
    ]
};