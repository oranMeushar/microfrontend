module.exports = {
    module:{
        rules: [
            {
                test:/\.m?js$/, //*any extention that ends with .js or .mjs we want to be processed by babel
                exclude: /node_modules/, //*do not try to run babel on any file inside node_module
                use:{
                    loader:'babel-loader',
                    options:{
                        presets: ['@babel/preset-react', '@babel/preset-env'], //*The first one means that babel is going to process all the jsx tags and the second will convert the code to es5
                        plugins: ['@babel/plugin-transform-runtime']

                    }
                }
            }
        ]
    }
}