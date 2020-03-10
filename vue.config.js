module.export = {
    modules: {
        rules: [
            {test: '/\.css$/', use: ['style-loader', 'css-loader'] }
        ]
    }
}