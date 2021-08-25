/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  env: {
    NEXT_PUBLIC_COMMIT_ID: process.env.NEXT_PUBLIC_COMMIT_ID,
  },
};

module.exports = nextConfig;
