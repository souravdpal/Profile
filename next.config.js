/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // generate static site in /out
  images: {
    unoptimized: true, // disable next/image optimizer for GitHub Pages
  },
  typedRoutes: false, // fixed placement (not under experimental)
  basePath: "/Profile", // 👈 important: your repo name
  assetPrefix: "/Profile/", // ensures assets load correctly on GitHub Pages
};

module.exports = nextConfig;
