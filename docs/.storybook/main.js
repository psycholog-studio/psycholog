
const path = require('path')

const node_modules = path.join(__dirname, 'node_modules');

module.exports = {
  staticDirs: [{ from: '../../assets', to: '/assets' }],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      [
        "@emotion",
        {
          "sourceMap": true,
          "autoLabel": "dev-only",
          "labelFormat": "[local]",
          "cssPropOptimization": true
        }
      ],
      ["@babel/plugin-proposal-numeric-separator"],
    ]
  }),
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../../packages/scenes/src/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  "addons": [
    "@storybook/addon-links",
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
    },
    "@storybook/addon-essentials",
    '@storybook/addon-storysource',
    '@storybook/addon-events',
    '@storybook/addon-measure',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      "@psycholog/ui": path.resolve(__dirname, "../../packages/ui/src"),
      "@psycholog/scenes": path.resolve(__dirname, "../../packages/scenes/src"),
    };

    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            sassOptions: {
              includePaths: [
                path.resolve(__dirname, './node_modules')
              ]
            }
          }
        }
      ],
    });

    return config;
  },
}
