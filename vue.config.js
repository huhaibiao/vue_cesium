module.exports = {
    publicPath:'./',
	chainWebpack: (config) => {
        config.module
          .rule("worker")
          .test(/\.worker\.js$/)
          .use("worker-loader")
          .loader("worker-loader")
          .options({
            inline: "fallback"
          });
          // console.log(this);
        config.module.rule("js").exclude.add(/\.worker\.js$/);
      },
	}