import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/Atiqur_Rahman_Resume.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
