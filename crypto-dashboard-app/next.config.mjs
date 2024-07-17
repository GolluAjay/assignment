/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard/BTC",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
