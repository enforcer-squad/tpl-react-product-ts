const config = {
  buildDetail: false,
  devServer: {
    port: 2345,
    hot: true,
    host: '0.0.0.0',
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: {
      disableDotRule: true,
    },
    proxy: {
      '/api': {
        target: 'http://172.16.8.58:8000',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/xxx': '/',
        // },
      },
    },
  },
  local: {
    API_PATH: '/api',
    TIME_OUT: 1000 * 120, //两分钟
    SUB_DIR: 'static',
    PUBLIC_PATH: '/',
  },
  prod: {
    API_PATH: '/api',
    TIME_OUT: 1000 * 120, //两分钟
    SUB_DIR: 'static',
    PUBLIC_PATH: '',
  },
};

module.exports = { config };
