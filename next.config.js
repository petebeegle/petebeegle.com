/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  env: {
    NEXT_PUBLIC_COMMIT_ID: process.env.NEXT_PUBLIC_COMMIT_ID,
  },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer(nextConfig);
