const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:4000",
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        "^/api": "/", // rewrite path
      },
    })
  );
};