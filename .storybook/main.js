module.exports = {
  "stories": [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/theming",
    "@storybook/addon-essentials",
    'storybook-addon-designs',
    'storybook-mobile',
    '@storybook/addon-a11y',
    'storybook-styled-components-theme-selector',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
}
