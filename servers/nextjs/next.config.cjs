// next.config.js / .mjs
const API_TARGET = process.env.DEV_API_TARGET; // например http://localhost:5002

module.exports = {
  // ...ваш существующий конфиг
  async rewrites() {
    if (!API_TARGET) return [];
    return [
      { source: "/api/v1/:path*", destination: `${API_TARGET}/api/v1/:path*` },
      { source: "/app_data/:path*", destination: `${API_TARGET}/app_data/:path*` },
      { source: "/static/:path*", destination: `${API_TARGET}/static/:path*` },
    ];
  },
};