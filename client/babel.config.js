module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@src': './src',
          '@screens': './src/screens',
          '@theme': './src/theme',
          '@style': './src/style',
          '@utils': './src/utils',
          '@assets': './src/assets',
          '@commonComponents': './src/commonComponents',
          '@otherComponents': './src/otherComponents',
          '@api': './src/api',
          '@style': './src/style',
          '@App': './App',
        },
      },
    ],
  ],
};
