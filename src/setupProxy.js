const { createProxyMiddleware } = require("http-proxy-middleware");
const API_URL = process.env.API_URL;
module.exports = function (app) {
  app.use(
    "",
    createProxyMiddleware({
      target: `${API_URL}`,
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/api": "/", // rewrite path
      },
    })
  );
};
