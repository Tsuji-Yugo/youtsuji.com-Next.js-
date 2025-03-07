import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  trailingSlash: true,  // GitHub Pages ではディレクトリを必要とする
}
// next.config.js
module.exports = {
  output: 'export',
}

export default nextConfig;
