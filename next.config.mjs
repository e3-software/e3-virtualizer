/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/e3/dashboard',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
