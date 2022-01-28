const { PHASE_PRODUCTION_BUILD } = require('next/constants');

/** @type{import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = (phase) => {
  switch (phase) {
    case PHASE_PRODUCTION_BUILD: {
      const withBundleAnalyzer = require('@next/bundle-analyzer')({
        enabled: process.env.ANALYZE === 'true',
      });

      return withBundleAnalyzer(nextConfig);
    }

    default:
      return nextConfig;
  }
};
