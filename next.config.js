/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'example.com', 
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'vale-backend-production.up.railway.app', // Agrega este patrón
        pathname: '/**', // Esto permite todas las rutas en este dominio
      },
    ],
  },
};

module.exports = nextConfig;
