const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    // Point d'entrée de l'application
    entry: './src/index.jsx',
    
    // Configuration de la sortie
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment 
        ? '[name].js' 
        : '[name].[contenthash].js',
      publicPath: '/',
      clean: true, // Nettoie le dossier de build à chaque compilation
    },

    // Gestion des source maps
    devtool: isDevelopment 
      ? 'eval-cheap-module-source-map' 
      : 'source-map',

    // Règles de traitement des fichiers
    module: {
      rules: [
        // Transformation des fichiers JavaScript et JSX
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', 
                '@babel/preset-react'
              ]
            }
          },
        },
        // Gestion des fichiers SCSS
        {
          test: /\.(scss|sass)$/,
          use: [
            // Utilise MiniCssExtractPlugin en production, style-loader en développement
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                // Permet d'importer des fichiers SCSS globaux
                additionalData: `
                  @import "./src/styles/base/_variables.scss";
                `
              }
            }
          ],
        },
        // Gestion des fichiers CSS
        {
          test: /\.css$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader, 
            'css-loader'
          ],
        },
        // Gestion des assets (images, etc.)
        {
          test: /\.(png|svg|jpg|gif|webp)$/,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024 // 10ko
            }
          },
          generator: {
            filename: 'assets/[name].[contenthash][ext]'
          }
        },
        // Gestion des fichiers font
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[contenthash][ext]'
          }
        }
      ],
    },

    // Résolution des extensions
    resolve: {
      extensions: ['.js', '.jsx', '.scss', '.css'],
      // Alias pour simplifier les imports
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles')
      }
    },

    // Plugins de configuration
    plugins: [
      // Gestion des variables process
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      
      // Nettoyage du dossier de build
      new CleanWebpackPlugin(),

      // Configuration du fichier HTML
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        minify: !isDevelopment // Minification en production
      }),

      // Gestion des variables d'environnement
      new Dotenv({
        path: `./.env.${process.env.NODE_ENV || 'development'}`,
        safe: true,
        systemvars: true,
        defaults: false
      }),

      // Définition globale des variables d'environnement
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.DEBUG': JSON.stringify(process.env.DEBUG || false)
      }),

      // Lint du code
      new ESLintPlugin({
        extensions: ['js', 'jsx'],
        context: path.resolve(__dirname),
        eslintPath: path.resolve(__dirname, 'node_modules/eslint'),
        cache: true,
        failOnError: false,
        emitWarning: true,
      }),

      // Extraction des CSS en fichiers séparés en production
      !isDevelopment && new MiniCssExtractPlugin({
        filename: 'styles/[name].[contenthash].css',
        chunkFilename: 'styles/[id].[contenthash].css',
      }),
    ].filter(Boolean), // Supprime les plugins conditionnels désactivés

    // Configuration du serveur de développement
    devServer: {
      historyApiFallback: true, // Support du routing côté client
      port: 3000,
      hot: true, // Rechargement à chaud
      open: true, // Ouvre automatiquement dans le navigateur
      compress: true, // Compression GZIP
      client: {
        overlay: true, // Affiche les erreurs à l'écran
      }
    },

    // Optimisation de la compilation
    optimization: {
      minimize: !isDevelopment,
      minimizer: [
        // Optimisation JS
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Supprime les console.log en production
            }
          }
        }),
        // Optimisation CSS
        new CssMinimizerPlugin()
      ],
      moduleIds: 'deterministic',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          styles: {
            test: /\.(scss|css)$/,
            name: 'styles',
            chunks: 'all',
            enforce: true,
          }
        },
      },
    },

    // Performance
    performance: {
      hints: isDevelopment ? false : 'warning',
      maxEntrypointSize: 250000, // 250ko
      maxAssetSize: 250000, // 250ko
    }
  };
};