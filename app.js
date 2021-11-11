const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
var app = express();

app.use(express.static("docs"));
app.use('/api', createProxyMiddleware({
  target: 'http://159.75.35.27:6899', // 服务器api地址目录
  changeOrigin: true,
  // pathRewrite: {
  //   "^/api": "/"
  // }
}));


app.listen(8080, function () { // 代理接口
  console.log('代理接口启动成功,端口:http://192.168.0.101:80');
});
