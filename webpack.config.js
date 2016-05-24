module.exports={
    entry:"./App.js",
    output:{
        filename:"js/bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                exclude:/(node_modules|bower_components)/,
                loader:'babel',
                query:{
                    presets:['react','es2015']
                }
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            }
        ]
    }
    //,
    //plugins: [new BowerWebpackPlugin()]
};