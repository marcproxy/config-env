module.exports = {
    presets: [
      ['@babel/preset-env', {
        targets: {
          node: 'current',
          browsers: ['> 1%', 'last 2 versions'],
        },
      }],
      '@babel/preset-react',
    ],  plugins: [
      // Ajoutez ces plugins si nécessaire
      '@babel/plugin-transform-runtime'
    ]
  };