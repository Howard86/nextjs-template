const {
  PHASE_PRODUCTION_BUILD,
  PHASE_DEVELOPMENT_SERVER,
} = require('next/constants');

/** @type{import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias = {
      ...config.resolve.alias,
      '@mui/styled-engine': '@mui/styled-engine-sc',
    };
    return config;
  },
};

module.exports = (phase) => {
  switch (phase) {
    case PHASE_PRODUCTION_BUILD: {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      });

      return withBundleAnalyzer(nextConfig);
    }

    case PHASE_DEVELOPMENT_SERVER: {
      const withTM = require('next-transpile-modules')([
        '@mui/material',
        '@mui/system',
      ]);

      return withTM(nextConfig);
    }

    default:
      return nextConfig;
  }
};
