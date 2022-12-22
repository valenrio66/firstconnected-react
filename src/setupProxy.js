const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '',
    createProxyMiddleware({
      target: 'https://test-gogin.herokuapp.com',
      changeOrigin: true,
    })
  );
};