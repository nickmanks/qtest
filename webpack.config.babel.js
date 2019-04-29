/* eslint-env node */
/* eslint no-console: 0 */
import {resolve, relative} from 'path';
// eslint-disable-next-line
import webpack from 'webpack';
import ReactEntryLoaderPlugin from 'react-entry-loader/plugin';
import reactEntry from 'react-entry-loader/entry';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ()=> {
  const isProduction = false;
  const port = 8080;

  return {
    mode: isProduction ? 'production': 'development',
    entry: {
      app: [
        '@babel/polyfill',
        reactEntry({output: 'index.html'})('./src/index.html.js')
      ]
    },

    output: {
      path: resolve(__dirname, 'build/pkg'),
      filename: '[name]-[contenthash].js',
      // improve paths in devtools
      devtoolModuleFilenameTemplate: (info)=> (
        `webpack:///${relative(__dirname, info.absoluteResourcePath)}`
      )
    },

    optimization: {
      minimize: isProduction,
      runtimeChunk: {name: 'runtime'},
      splitChunks: {
        chunks: 'all',
        name: !isProduction,
        cacheGroups: {
          default: false,
          react: {
            test: /[\\/]node_modules[\\/]react/,
            name: 'react',
            chunks: 'all'
          },
          styles: {
            // workaround for dynamically loading components.
            // make sure we only have a single CSS chunk
            minSize: 0,
            test: /\.s?css$/,
            name: 'styles'
          }
        }
      }
    },

    plugins: [
      new ReactEntryLoaderPlugin(),
      new MiniCssExtractPlugin({chunkFilename: '[name]-[contenthash].css'})
    ],

    module: {
      rules: [{
        test: /(\.scss|\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: !isProduction,
              importLoaders: 2,
              localIdentName: '[name]_[local]_[hash:base64:5]',
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: ()=> [
                require('postcss-nested')({ /* options */ }),
                require('autoprefixer')
              ],
              sourceMap: !isProduction
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: !isProduction,
              data: '@import "src/theme.scss";',
              includePaths: [
                resolve(__dirname),
                resolve(__dirname, './node_modules')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg|ico|gif)$/,
        loader: 'url-loader?limit=1'
      }, {
        test: /\.jsx?$/,
        include: [
          resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
        options: {
          envName: isProduction ? 'production' : 'webpack-dev'
        }
      }]
    },
    devtool: isProduction ? false : '#cheap-module-source-map',
    devServer: {
      port,
      host: '0.0.0.0',
      inline: true,
      stats: 'minimal',
      contentBase: './build',
      publicPath: `/`,
      historyApiFallback: {
        rewrites: [
          {from: /^\/$/, to: `/`}
        ]
      }
    }
  };
};
