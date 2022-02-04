const path = require('path')
const withTM = require('next-transpile-modules')(
  ['@psycholog-studio/ui', '@psycholog-studio/utils'],
  {
    resolveSymlinks: true,
  }
)

module.exports = withTM({
  requireConfigFile: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  future: {
    webpack5: true,
  },
  webpack: (config, options) => {
    const nextPagesDir = path.join(__dirname, '../../packages')

    const typescriptLoader = {
      test: /(?!stories)\.ts(x?)$/,
      use: 'ts-loader',
      include: nextPagesDir,
    }

    config.module.rules.push(typescriptLoader)

    config.resolve.alias = {
      ...config.resolve.alias,
      '@psycholog-studio/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@psycholog-studio/scenes': path.resolve(
        __dirname,
        '../../packages/scenes/src'
      ),
      '@psycholog-studio/utils': path.resolve(
        __dirname,
        '../../packages/utils/src'
      ),
    }

    return config
  },
})
