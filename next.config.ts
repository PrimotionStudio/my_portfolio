import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      { source: "/home", destination: "/", permanent: true },
      // Old links to the CV keep working.
      {
        source: "/mycv.pdf",
        destination: "/Martins-Okanlawon-CV.pdf",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
