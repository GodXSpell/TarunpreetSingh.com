import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["next-mdx-remote"],
  allowedDevOrigins: ["tarunpreet-laptop.local"], // Update with your machine name if needed
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com", // For GitHub assets like avatar
        port: "",
      },
    ],
    qualities: [75, 100],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            // Prevents MIME type sniffing, reducing the risk of malicious file uploads
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            // Protects against clickjacking attacks by preventing your site from being embedded in iframes.
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            // Controls how much referrer information is included with requests, balancing security and functionality.
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            // Basic XSS protection
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            // Content Security Policy (basic setup)
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
