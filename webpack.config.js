module.exports = {
    entry: './demo/ES2015/dnddemo.ts',
    output: {
        filename: './demo/ES2015/dnddemo.js'
    },
    resolve: {
        extensions: ['*', '.webpack.js', '.web.js', '.ts', '.js']
    },
    module: {
        loaders: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    }
}