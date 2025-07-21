/** @type {import('next').NextConfig} */
const nextConfig = () => {
  const isStaticExportBuild = process.env.NEXT_BUILD_MODE === 'static';
  return {
    output: isStaticExportBuild ? 'export' : undefined,
    reactStrictMode: false,
    swcMinify: true,
    // `Image` not supported in static export
    images: {
      unoptimized: true,
    },
    modularizeImports: {
      '@mui/material': {
        transform: '@mui/material/{{member}}',
      },
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: { and: [/\.(js|ts|md)x?$/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              prettier: false,
              svgo: false,
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: { removeViewBox: false },
                    },
                  },
                ],
              },
              titleProp: true,
            },
          },
        ],
      })
      // New rule for .glb files
      config.module.rules.push({
        test: /\.glb$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[hash][ext][query]',
        },
      })
      return config
    },
  }
}

module.exports = nextConfig
