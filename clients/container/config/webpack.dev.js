const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const commonConfig = require('./webpack.common');
const { ModuleFederationPlugin } = require('webpack').container;
const packageJSON = require('../package.json');

const devConfig = {
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        //*This plugin will take a look at whatever files that are coming out of our webpack process, 
        //*it will find those files namespace and add the appropriate script tags to the index.html file automatically
        //*(this is why there is no script tag inside index.html)
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name:'app',
            filename:'remoteEntry.js',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js',
            },
            shared:packageJSON.dependencies
        })
    ]
};

//*by listing devconfig second, it means that it will take priority/override over any other similar options that were assigned to commonConfig
module.exports = merge(commonConfig, devConfig);