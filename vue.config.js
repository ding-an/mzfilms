module.export = {
    modules: {
        rules: [
            {test: '/\.css$/', use: ['style-loader', 'css-loader'] }
        ]
    },
    devServer: {
        port: 8081 //端口
    }
}