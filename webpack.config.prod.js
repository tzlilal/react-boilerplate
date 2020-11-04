const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    new BundleAnalyzerPlugin({
      // if we don't want it to run a server and simply use a satic file
      // will generate a report.html file
      analyzerMode: 'static',
      // will not open the file in the browser when running the build command
      openAnalyzer: false,
    }),
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
});
