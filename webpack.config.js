var webpack = require('webpack');

module.exports = {

    entry:{
     vendor : './resources/assets/ts/vendor.ts',
     app: './resources/assets/ts/main.ts'
    },
    output: {
        path: './public/js',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/, 
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['','.js','.ts']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js")
    ]
};