const path = require('path');
const copy = require('copy-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const Extract = require('mini-css-extract-plugin');
const Terser = require('terser-webpack-plugin');


module.exports = env => {
    const dev = !(env && env.production);
    const output = './@dist';

    return {
        mode: dev ? 'development' : 'production',
        devtool: dev ? 'source-map' : false,
        entry: {
            bundle: './src/index.tsx',
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            symlinks: false,
            alias: {
                'react-dom': '@hot-loader/react-dom',
                '@assets': path.resolve(__dirname, './assets/'),
                '@components': path.resolve(__dirname, './src/components/'),
                '@library': path.resolve(__dirname, './src/library/'),
                '@models': path.resolve(__dirname, './src/models/'),
                '@services': path.resolve(__dirname, './src/services/'),
                '@providers': path.resolve(__dirname, './src/providers/')
            }
        },
        output: {
            path: path.join(__dirname, output),
            filename: 'js/[name].min.js',
            chunkFilename: 'js/[name].chunk.min.js',
            publicPath: '/'
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    test: /\.tsx?$/,
                    loader: 'babel-loader'
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    loader: 'file-loader?name=img/[name].[ext]'
                },
                {
                    test: /\.(woff|woff2|eot|ttf|svg)$/,
                    loader: 'file-loader?name=font/[name].[ext]'
                },
                {
                    test: /\.css$/,
                    use: [Extract.loader, 'css-loader']
                },
                {
                    test: /\.less$/,
                    use: [Extract.loader, 'css-loader', 'less-loader']
                }
            ]
        },
        optimization: {
            minimize: true,
            minimizer: dev ? [] : [
                new Terser()
            ],
        },
        plugins: [
            // common plugin dev and production
            new copy([
                { from: 'assets/index.html', to: path.join(__dirname, output) },
                { from: 'assets/img/favicon.png', to: path.join(__dirname, output) },
            ]),
            new Extract({ filename: 'css/[name].css', publicPath: '/' })
        ]
    };
};
