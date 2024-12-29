/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL || "localhost:8000",
    SECRET_KEY: process.env.SECRET_KEY,
  },
};

export default nextConfig;
