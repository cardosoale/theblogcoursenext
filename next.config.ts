import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
        search: '',
      },

      // TODO LIBERAR NO SERVIDOR HTTPS
      // {
      //   protocol: 'https',
      //   hostname: 'example.com.br',
      //   port: '',
      //   pathname: '/**',
      //   search: '',
      // },
    ],
  },
};

export default nextConfig;
