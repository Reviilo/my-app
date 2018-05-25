// Dependencies 
import webpack from 'webpack';
import path from 'path';

// Environment 
const isDevelopment = process.env.NODE_ENV !== 'production';
console.log(isDevelopment);

// Paths
const PATHS = {
  index: path.join(__dirname, 'src/index'),
  build: path.join(__dirname, 'src/public'),
  src: path.join(__dirname, 'src')
};

const getMode = () => isDevelopment ? 'development' : 'production';

const getDevtool = () => 'cheap-module-eval-source-map';

const getEntry = () => {
  const entry = [
    PATHS.index
  ];

  if (isDevelopment) {
    entry.push('webpack-hot-middleware/client?reload=true');
  }

  return entry;
};

const getOutput = () => ({
  path: PATHS.build,
  publicPath: '/',
  filename: '[name].bundle.js'
});

const getPlugins = () => {
  const plugins = [];

  return plugins;
};

const getModule = () => ({
  rules: [
    {
      test: /\.(js|jsx)?$/,
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
});

const getOptimization = () => ({
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendors",
        chunks: "all"
      }
    }
  }
});

// Webpack Config
export default {
  mode: getMode(),
  devtool: getDevtool(),
  entry: getEntry(),
  output: getOutput(),
  plugins: getPlugins(),
  module: getModule(),
  optimization: getOptimization()
};