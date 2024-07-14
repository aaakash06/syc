/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.easyfrontend.com",
        port: "",
        pathname: "/pictures/users/**",
      },
    ],
  },
};

export default nextConfig;
