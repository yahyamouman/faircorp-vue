module.exports = {
    // options...
    devServer: {
        proxy: 'http://faircorp-yahya-mouman.cleverapps.io/',
    },
    lintOnSave: false,
    publicPath: process.env.NODE_ENV === 'production'
        ? '/' + process.env.CI_PROJECT_NAME + '/'
        : '/'
}
