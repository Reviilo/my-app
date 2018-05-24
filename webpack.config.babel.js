// Dependencies 
import webpack from 'webpack';
import path from 'path';

// Environment 
const isDevelopment = process.env.NODE_ENV !== 'production';

// Paths
const PATHS = {
  index: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, 'src/public'),
  src: path.join(__dirname, 'src')
};

const getMode = () => isDevelopment ? 'development' : 'production';

const getDevtool = () => 'ceap-module-eval-source-map';

const getEntry = () => {
  const entry = [
    PATHS.index
  ];

  if (isDevelopment) {
    entry.push('webpack-hot-middleware/client?reload=true');
  }

  return entry;
}

const getOutput = () => ({
  path: PATHS.build,
  publicPath: '/',
  filename: 'bundle.js'
});

const getPlugins = () => {
  const plugins = [
  ];
  
  if(isDevelopment){
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    );
  }

  return plugins;
}

const getModule = () => {
  
  rules: [
    {
      test: /\.js?$/,
      loaders: ['babel-loader'],
      include: PATHS.src
    },
    {
      test: /(\.css)$/,
      loader: ['style-loader', 'css-loader']
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
    }
  ]

}

// Webpack Config
export default {
  mode: getMode(),
  devtool: getDevtool(),
  entry: getEntry(),
  output: getOutput(),
  plugins: getPlugins(),
  module: getModule(),
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  }
};