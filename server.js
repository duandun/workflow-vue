var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
config.entry.unshift('webpack-dev-server/client?http://localhost:8050', 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());

var compiler = webpack(config);
// 启动服务
var app = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
});
app.listen(8050);
