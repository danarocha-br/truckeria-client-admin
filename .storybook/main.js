module.exports = {
  "stories": [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    'storybook-addon-designs',
    '@etchteam/storybook-addon-status/register',
    'storybook-mobile',
    '@storybook/addon-a11y',
    'storybook-styled-components-theme-selector',
  ],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;
  },
}
