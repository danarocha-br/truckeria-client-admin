module.exports = {
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/theming', 'storybook-addon-designs', 'storybook-mobile', '@storybook/addon-viewport', 'storybook-addon-docs-tabs', 'multiple-themes-stitches'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true // type-check stories during Storybook build

  },
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
  core: {
    builder: 'webpack5'
  }
};