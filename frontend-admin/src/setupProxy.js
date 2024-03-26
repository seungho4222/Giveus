const {createProxyMiddleware} = require("http-proxy-middleware")

module.exports = function (app) {
    app.use(
        "/api", // proxy가 필요한 path parameter 입력
        createProxyMiddleware({
            target:"http://localhost:3001", // 타겟이 되는 api url을 입력
            changeOrigin: true,
        })
    )
}