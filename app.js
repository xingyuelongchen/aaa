const express = require('express');
const networkInterfaces = require('os').networkInterfaces;
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = express();

app.use(express.static("docs"));
app.use('/api', createProxyMiddleware({
  target: 'http://159.75.35.27:6899',
  changeOrigin: true,
}));
app.listen(80, function () {
  console.log('代理接口启动成功:');
  console.log("http:");
  JSON.stringify(networkInterfaces(), (a, b) => {
    if (b.family && b.family === "IPv4") {
      console.log('\x1B[36m%s\x1B[0m', "       http://" + b.address + ":" + 80);
    }
    return b;
  });
});
