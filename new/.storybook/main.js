module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.@(ts|tsx|js|jsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/theming',
    'storybook-addon-next-router',
    'storybook-addon-designs',
    'storybook-mobile',
    'storybook-addon-docs-tabs',
    'multiple-themes-stitches',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
};
