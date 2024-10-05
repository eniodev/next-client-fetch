/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
        remotePatterns: [
          {
            protocol: "https",
            hostname: "fujifilm-x.b-cdn.net",
            port: "",
            pathname: "/wp-content/uploads/2023/08/**",
          },
        ]
  }
};

export default nextConfig;
