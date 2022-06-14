module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/config': './src/config',
          '@/hooks': './src/hooks',
          '@/navigator': './src/navigator',
          '@/screens': './src/screens',
          '@/services': './src/services',
          '@/store': './src/store',
          '@/utils': './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin', // NOTE: Reanimated plugin has to be listed last
  ],
};
