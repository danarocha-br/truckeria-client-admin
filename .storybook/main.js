module.exports = {
  "stories": [
    "../src/**/**/*.stories.mdx",
    "../src/**/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@etchteam/storybook-addon-status/register',
    'storybook-mobile',
    '@storybook/addon-a11y',
  ],
  webpackFinal: (config ) => {

    config.resolve.modules.push(`${process.cwd()}/src`);
    return config;

  },
}
