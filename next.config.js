const hostnames = [
    'avatars.githubusercontent.com',
    'platform-lookaside.fbsbx.com',
    'lh3.googleusercontent.com',
]

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: hostnames.map(hostname => ({
          protocol: 'https',
          hostname
      }))
    },
    output: 'export'
  };

module.exports = nextConfig

