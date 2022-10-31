/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});
module.exports = withMDX({
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  async redirects() {
    return [
      {
        source: "/all",
        destination: "/",
        permanent: true,
      },
      {
        source: "/zoom",
        destination: "https://brown.zoom.us/my/dylanhu",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/dylanhu7",
        permanent: true,
      },
      {
        source: "/gh",
        destination: "https://github.com/dylanhu7",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/dylanhu7/",
        permanent: true,
      },
    ];
  },
});
