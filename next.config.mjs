import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // Ignore the specific cache serialization warnings
    config.ignoreWarnings = [
      { module: /fumadocs-mdx\/loader-mdx\.cjs/ },
      { file: /fumadocs-mdx\/loader-mdx\.cjs/ },
      { module: /next\/dist\/build\/webpack/ },
      { file: /next\/dist\/build\/webpack/ }
    ];

    // Disable file system cache in development
    if (!isServer) {
      config.cache = false;
    }

    return config;
  },
};

export default withMDX(config);
