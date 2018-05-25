// Dependencies 
import webpack from 'webpack';
import path from 'path';

// Environment 
const isDevelopment = process.env.NODE_ENV !== 'production';
console.log(isDevelopment);

// Paths
const PATHS = {
  index: path.resolve(__dirname, 'src/index'),
  build: path.resolve(__dirname, 'src/public'),
  src: path.resolve(__dirname, 'src')
};

const getMode = () => isDevelopment ? 'development' : 'production';

const getDevtool = () => 'cheap-module-eval-source-map';

const getEntry = () => {
  const entry = [
    PATHS.index
  ];

  if (isDevelopment) {
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000');
  }

  return entry;
};

const getOutput = () => ({
  path: PATHS.build,
  publicPath: '/',
  filename: '[name].bundle.js',
  hotUpdateChunkFilename: ".hot/[id].[hash].hot-update.js",
  hotUpdateMainFilename: ".hot/[hash].hot-update.json"
});

const getPlugins = () => {
  const plugins = [

  ];

  if(isDevelopment) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
};

const getModule = () => ({
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