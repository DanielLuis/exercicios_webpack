const webpack = require('webpack')


module.exports = {
    //devtool: 'source-map',
    entry: './ex/index.js',
    output : {
        path : __dirname + '/public',
        filename : './bundle.js'
    },
    devServer : {
        port : 8080,
        contentBase : './public'
    },
    module : {

        rules: [{
                test: /.js?$/,
                loader : 'babel-loader',
                exclude : /node_modules/,
                query : {
                    presets : ['es2015']
                }
            }]
    }
}
